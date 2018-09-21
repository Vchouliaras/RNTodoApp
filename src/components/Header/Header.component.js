import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Styles from './Header.styles'

const Header = ({title}) => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header