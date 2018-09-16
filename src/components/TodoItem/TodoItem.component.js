import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Styles from './TodoItem.styles'


class TodoItem extends React.Component {
  render() {
    return (
      <View style={Styles.row}>
        <View style={Styles.timeline}>
          <View style={Styles.timelineVerticalLink} />
          <Icon
            style={Styles.icon}
            name={'circle'}
            size={6}
          />
        </View>
        <View style={Styles.content}>
          <Text style={Styles.text}>{'text'}</Text>
          <Text style={Styles.time}>{'time'}</Text>
        </View>
      </View>
    )
  }
}

export default TodoItem