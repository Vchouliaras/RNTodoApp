import { StyleSheet } from 'react-native'

import Theme from '../../styles'

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.var.WHITE,
    backgroundColor: Theme.var.CERULEAN,
    height: Theme.mixin.getHeaderHeight(),
  },
  title: {
    textAlign: 'center',
    color: Theme.var.TEXT_COLOR,
    fontSize: Theme.var.FONT_SIZE_LARGE,
    fontWeight: Theme.var.FONT_WEIGHT_MEDIUM,
  }
})

export default styles