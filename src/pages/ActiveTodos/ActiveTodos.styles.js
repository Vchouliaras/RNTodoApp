import { StyleSheet, Dimensions } from 'react-native'

import Theme from '../../styles'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Theme.var.WHITE
  },
  container: {
    flex: 1,
    backgroundColor: Theme.var.MEDIUM_JUNGLE_GREEN,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: Theme.var.CERULEAN,
    borderBottomWidth: 1,
    borderBottomColor: Theme.var.MEDIUM_JUNGLE_GREEN,
  },
  inputContainer: {
    padding: 10,
    width: width * 0.7
  },
  dateViewContainer: {
    width: width * 0.3
  },
  rowLeft: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Theme.var.FOREST_GREEN
  },
  rowRight: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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