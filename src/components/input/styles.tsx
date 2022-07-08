import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../assets'

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
  },
  label: {
    color: colors.grey,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greySoft,
    paddingVertical: numbers.padding.md,
  },
})

export default styles
