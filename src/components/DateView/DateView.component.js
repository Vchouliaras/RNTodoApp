import React from 'react'
import { View, Text } from 'react-native'
import { format } from 'date-fns'

import Styles from './DateView.styles'

/**
 * Handles current date format
 */
const dateFormat = () => {
  const now = new Date()
  return {
    'date': format(now, 'dd'),
    'day': format(now, 'D'),
    'month': format(now, 'MMMM'),
  }
}

const DateView = () => {
  const {
    date,
    day,
    month,
  } = dateFormat()

  return (
    <View style={Styles.container}>
      <Text style={Styles.date}>{date}</Text>
      <Text style={Styles.day}>{day}</Text>
      <Text style={Styles.month}>{month}</Text>
    </View>
  )
}

export default DateView