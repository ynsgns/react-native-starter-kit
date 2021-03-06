import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    marginTop: numbers.padding.md,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.greySoft,
    padding: numbers.padding.l,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.grey_dark,
  },
  leftView: {
    flex: 8,
    justifyContent: 'center',
  },
  rightView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  //
  renderItem_container: {
    padding: numbers.padding.md,
    // backgroundColor: 'blue',
  },
  renderItem_button: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  renderItem_lines: {
    backgroundColor: colors.greySoft_2,
    marginTop: numbers.padding.s,
    width: '100%',
    height: 1,
  },
})

export default styles
