import React from 'react'
import { Text, View, FlatList  } from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../redux/actions/TodoActions'

import Header from '../../components/Header/Header.component'
import Input from '../../components/Input/Input.component'
import DateView from '../../components/DateView/DateView.component'
import TodoItem from '../../components/TodoItem/TodoItem.component'

import Styles from './ActiveTodos.styles'

class ActiveTodos extends React.Component {

  renderTodoItem = ({item, index}) => {
    return (
      <TodoItem key={index} {...item} />
    )
  }

  render() {
    return (
      <View style={Styles.container}>
        <Header title='My todo List!' />
        <View style={Styles.header}>
          <View style={Styles.inputContainer}>
            <Input
              addTodoHandler={this.props.addTodo}
            />
          </View>
          <DateView />
        </View>
        <FlatList
          data={this.props.todos}
          renderItem={this.renderTodoItem}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(TodoActions, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTodos)