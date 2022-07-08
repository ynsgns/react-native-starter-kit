import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../assets'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: colors.grey,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greySoft,
    padding: numbers.padding.md,
    width: '100%',
  },
})

export default styles
