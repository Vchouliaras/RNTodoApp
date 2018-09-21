import { StyleSheet } from 'react-native'

import Theme from '../../styles'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  day: {
    color: Theme.var.WHITE,
    fontSize: Theme.var.FONT_SIZE_MEDIUM,
    fontWeight: Theme.var.FONT_WEIGHT_NORMAL
  },
  date: {
    color: Theme.var.WHITE,
    fontSize: Theme.var.FONT_SIZE_XX_LARGE,
    fontWeight: Theme.var.FONT_WEIGHT_HEAVY
  },
  month: {
    color: Theme.var.WHITE,
    fontSize: Theme.var.FONT_SIZE_SMALL,
    fontWeight: Theme.var.FONT_WEIGHT_NORMAL
  }
})

export default styles