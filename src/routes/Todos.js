import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import ActiveTodos from '../pages/ActiveTodos/ActiveTodos.component'
import CompletedTodos from '../pages/CompletedTodos/CompletedTodos.component'

import Theme from '../styles'

// eslint-disable-next-line react/prop-types,react/display-name
const TabBarIcon = icon => ({ tintColor }) => (
  <Icon
    name={icon}
    size={19}
    style={{ color: tintColor }}
  />
)

const BottomNavigator = createBottomTabNavigator(
  {
    ActiveTodos: {
      screen: ActiveTodos,
      navigationOptions: {
        tabBarIcon: TabBarIcon('list-ul')
      }
    },
    CompletedTodos: {
      screen: CompletedTodos,
      navigationOptions: {
        tabBarIcon: TabBarIcon('check')
      }
    },
  },
  {
    backBehavior: ActiveTodos,
    tabBarOptions: {
      activeBackgroundColor: Theme.var.CERULEAN,
      activeTintColor: Theme.var.WHITE,
      labelStyle: { fontSize: Theme.var.FONT_SIZE_SMALL }
    },
  }
)

export default BottomNavigator