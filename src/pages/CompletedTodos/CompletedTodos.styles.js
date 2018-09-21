import { StyleSheet } from 'react-native'

import Theme from '../../styles'

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Theme.var.WHITE
  },
  container: {
    flex: 1,
    backgroundColor: Theme.var.MEDIUM_JUNGLE_GREEN
  },
  rowLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Theme.var.RED
  },
  icon: {
    color: Theme.var.WHITE
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.var.DIFF_WHITE
  }
})

export default styles