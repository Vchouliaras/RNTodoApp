import React from 'react'
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native'
import SwipeView from 'react-native-swipeview'
import Icon from 'react-native-vector-icons/FontAwesome'

import Config from '../../config'
import Styles from './ActiveTodos.styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../redux/actions/TodoActions'

import Header from '../../components/Header/Header.component'
import Input from '../../components/Input/Input.component'
import DateView from '../../components/DateView/DateView.component'
import TodoItem from '../../components/TodoItem/TodoItem.component'

const WINDOW_WIDTH = Dimensions.get('window').width

class ActiveTodos extends React.Component {

  /**
   * SwipeView callback to handle
   * background component rendering
   */
  renderRightView = () => (
    <View style={Styles.rowLeft}>
      <Icon
        style={Styles.icon}
        name={'check'}
        size={17}
      />
    </View>
  )

  /**
   * SwipeView callback to handle
   * background component rendering
   */
  renderLeftView = () => (
    <View style={Styles.rowRight}>
      <Icon
        style={Styles.icon}
        name={'times'}
        size={17}
      />
    </View>
  )

  /**
   * SwipeView callback to handle
   * foreground component
   */
  renderVisibleContent = item => () => <TodoItem {...item} />

  /**
   * SwipeView callback to handle
   * redux action calls
   */
  onSwipedLeft = id => () => this.props.completeTodo(id)


  /**
   * SwipeView callback to handle
   * redux action calls
   */
  onSwipedRight = id => () => this.props.deleteActiveTodo(id)

  /**
   * Flatlist callback to handle item list rendering
   */
  renderTodoItem = ({item}) => {
    return (
      <SwipeView
        swipeDuration={Config.swipe.swipeDuration}
        swipeToOpenPercent={Config.swipe.swipeToOpenPercent}
        onSwipedLeft={this.onSwipedLeft(item.id)}
        onSwipedRight={this.onSwipedRight(item.id)}
        leftOpenValue={WINDOW_WIDTH}
        rightOpenValue={ - WINDOW_WIDTH}
        renderVisibleContent={this.renderVisibleContent(item)}
        renderRightView={this.renderRightView}
        renderLeftView={this.renderLeftView}
      />
    )
  }

  /**
   * Flatlist callback to set a key for each list
   */
  keyExtractor = () => item => item.id

  /**
   * Flatlist callback to handle separator among items
   */
  renderFlatListSeparator = () => <View style={Styles.separator} />

  render() {
    return (
      <SafeAreaView style={Styles.safeView}>
        <View style={Styles.container}>
          <Header title={Config.navigation.activeTodos.title} />
          <View style={Styles.header}>
            <View style={Styles.inputContainer}>
              <Input
                addTodoHandler={this.props.addTodo}
              />
            </View>
            <View style={Styles.dateViewContainer}>
              <DateView />
            </View>
          </View>
          <FlatList
            data={this.props.todos}
            renderItem={this.renderTodoItem}
            ItemSeparatorComponent={this.renderFlatListSeparator}
            keyExtractor={this.keyExtractor()}
          />
        </View>
      </SafeAreaView>
    )
  }
}


/**
 * Pass ActiveTodos to a Higher Order Component "connect"
 * in order to connect to the redux store
 */

const mapStateToProps = state => {
  return {
    todos: state.todos.filter(todo => !todo.completed)
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(TodoActions, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTodos)