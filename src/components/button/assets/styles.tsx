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
  alignCenter: {alignItems: 'center'},
})

export default styles
