import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { BottomTabBar } from 'react-navigation-tabs'


import ActiveTodos from '../pages/ActiveTodos/ActiveTodos.component'
// import CompletedTodosPage from '../containers/CompletedTodos'

const TabBarComponent = props => <BottomTabBar {...props} />

export default createBottomTabNavigator({
  ActiveTodos: ActiveTodos,
  // CompletedTodos: ActiveTodos
},{
  // backBehavior: ,
  tabBarComponent: props =>
      <TabBarComponent
        {...props}
        style={{ borderTopColor: 'green' }}
      />,
})