// @flow

import React, {Component} from 'react'
// import { StyleSheet, View } from 'react-native'

import AppTodoNavigation from './routes/Todos'

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <AppTodoNavigation />
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   }
// })
