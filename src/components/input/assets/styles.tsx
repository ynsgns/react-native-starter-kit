import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    marginTop: numbers.padding.md,
  },
  label_white: {
    color: colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.greySoft,
    padding: numbers.padding.l,
    borderRadius: 4,
  },
  input_white: {
    borderWidth: 1,
    borderColor: colors.white,
    color: colors.white,
    borderRadius: 4,
    padding: numbers.padding.l,
  },
})

export default styles
