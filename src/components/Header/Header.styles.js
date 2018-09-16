import { StyleSheet, Platform } from 'react-native'

import Theme from '../../styles'

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.var.PRIMARY_COLOR,
    borderColor: Theme.var.SECONDARY_COLOR,
    borderBottomWidth: 1,
    height: Theme.mixin.getHeaderHeight(),
    shadowColor: Theme.var.CERULEAN,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 3,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: Theme.var.TEXT_COLOR,
    fontSize: Theme.var.FONT_SIZE_LARGE,
    fontWeight: Theme.var.FONT_WEIGHT_MEDIUM,
  }
})

export default styles