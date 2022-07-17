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
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    color: colors.white,
    paddingVertical: numbers.padding.md,
  },
})

export default styles
