import React from 'react'
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native'

import Config from '../../config'
import Styles from '../CompletedTodos/CompletedTodos.styles'

import SwipeView from 'react-native-swipeview'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../redux/actions/TodoActions'

import Header from '../../components/Header/Header.component'
import TodoItem from '../../components/TodoItem/TodoItem.component'

class CompletedTodos extends React.Component {

  /**
   * SwipeView callback to handle
   * foreground component
   */
  renderVisibleContent = item => () => <TodoItem {...item} />

  /**
   * SwipeView callback to handle
   * background component rendering
   */
  renderLeftView = () => (
    <View style={Styles.rowLeft}>
      <Icon
        style={Styles.icon}
        name={'times'}
        size={17}
      />
    </View>
  )

  /**
   * SwipeView callback to handle
   * redux action calls
   */
  onSwipedRight = id => () => this.props.deleteCompletedTodo(id)

  /**
   * Flatlist callback to handle item list rendering
   */
  renderTodoItem = ({item}) => {
    return (
      <SwipeView
        swipeToOpenPercent={Config.swipe.swipeToOpenPercent}
        swipeDuration={Config.swipe.swipeDuration}
        disableSwipeToLeft={true}
        onSwipedRight={this.onSwipedRight(item.id)}
        leftOpenValue={Dimensions.get('window').width}
        renderVisibleContent={this.renderVisibleContent(item)}
        renderLeftView={this.renderLeftView}
      />
    )
  }

  /**
   * Flatlist callback to handle separator among items
   */
  renderFlatListSeparator = () => <View style={Styles.separator} />

  /**
   * Flatlist callback to set a key for each list
   */
  keyExtractor = () => item => item.id

  render() {
    return (
      <SafeAreaView style={Styles.safeView}>
        <View style={Styles.container}>
          <Header title={Config.navigation.completedTodos.title} />
          <FlatList
            data={this.props.todos}
            renderItem={this.renderTodoItem}
            keyExtractor={this.keyExtractor()}
            ItemSeparatorComponent={this.renderFlatListSeparator}
          />
        </View>
      </SafeAreaView>
    )
  }
}

/**
 * Pass CompletedTodos to a Higher Order Component "connect"
 * in order to connect to the redux store
 */

const mapStateToProps = state => {
  return {
    todos: state.todos.filter(todo => todo.completed)
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(TodoActions, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedTodos)