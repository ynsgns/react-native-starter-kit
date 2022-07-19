import {Platform, StyleSheet} from 'react-native'
import {colors, numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    marginTop: numbers.padding.l,
  },
  label_view: {
    alignSelf: 'flex-start',
    marginBottom: numbers.padding.s,
  },
  label_white: {
    color: colors.white,
  },
  input: {
    zIndex: -1,
    borderWidth: 1,
    borderColor: colors.greySoft,
    borderRadius: 4,
    paddingHorizontal: 8,
    height: Platform.OS === 'ios' ? 52 : 50,
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
