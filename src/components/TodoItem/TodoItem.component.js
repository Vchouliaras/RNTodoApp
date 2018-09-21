import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

import Icon from 'react-native-vector-icons/FontAwesome'

import Styles from './TodoItem.styles'

const TodoItem = props => (
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
      <Text style={Styles.text}>{props.text}</Text>
      <Text style={Styles.time}>{`${distanceInWordsToNow(props.time)} ago`}</Text>
    </View>
  </View>
)

TodoItem.propTypes = {
  text: PropTypes.string,
  time: PropTypes.number
}

export default TodoItem