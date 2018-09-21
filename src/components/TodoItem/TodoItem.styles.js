import { StyleSheet } from 'react-native'

const ROW_HEIGHT = 70

import Theme from '../../styles'

const styles = StyleSheet.create({
  row: {
    backgroundColor: Theme.var.CERULEAN,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: ROW_HEIGHT,
  },
  timeline: {
    width: 8,
    height: ROW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineVerticalLink: {
    width: 1,
    height: ROW_HEIGHT,
    backgroundColor: Theme.var.DIFF_WHITE,
    justifyContent: 'center'
  },
  icon: {
    color: Theme.var.DIFF_WHITE,
    position: 'absolute',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: Theme.var.FONT_SIZE_LARGE,
    fontWeight: Theme.var.FONT_WEIGHT_MEDIUM,
    color: Theme.var.WHITE
  },
  time: {
    fontSize: Theme.var.FONT_SIZE_X_SMALL,
    fontWeight: Theme.var.FONT_WEIGHT_NORMAL,
    color: Theme.var.DIFF_WHITE
  }
})

export default styles