import {Platform, StyleSheet} from 'react-native'
import {numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    paddingHorizontals: numbers.padding.md,
    height: Platform.OS === 'ios' ? 52 : 50,
    marginTop: numbers.padding.xxxl,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  width100: {
    width: '100%',
  },
  link_title: {
    textDecorationLine: 'underline',
  },
})

export default styles
