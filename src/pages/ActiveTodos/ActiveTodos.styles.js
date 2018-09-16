import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
    flex: 1,
    backgroundColor: '#1B2127',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
});

export default styles