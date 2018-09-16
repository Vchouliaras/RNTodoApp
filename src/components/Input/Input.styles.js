import { Stylesheet, Dimensions } from 'react-native'

const styles = Stylesheet.create({
  input: {
    padding: 12,
    backgroundColor: '#526373',
    color: 'white',
    fontSize: 15,
    borderRadius: 3,
    width: Dimensions.get('window').width * 0.7,
  },
})

export default styles