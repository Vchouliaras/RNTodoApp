import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Header.styles'

const Header = (title = 'HOLA') => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.title}>{'title'}</Text>
    </View>
  )
}

export default Header