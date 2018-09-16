import { Platform, Dimensions } from 'react-native'

// React navigation provides Top bar's height
// as a static property in Header Component
import { Header } from 'react-navigation'

export const LANDSCAPE = 'landscape'
export const PORTRAIT = 'portrait'

export const getOrientation = () => {
  const {
    width,
    height
  } = Dimensions.get('window')

  return width > height
    ? LANDSCAPE
    : PORTRAIT
}

export const getHeaderHeight = () => {
  const orientation = getOrientation()
  let height = Header.HEIGHT

  if (
    Platform.OS === 'ios' &&
    orientation === LANDSCAPE &&
    !Platform.isPad
  ) {
    height = 32
  }

  return height
}