import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../../assets'

const styles = StyleSheet.create({
  view_style: {
    height: numbers.screen.height,
    width: numbers.screen.width,
    backgroundColor: colors.bg,
  },
  keyboardView_style: {
    height: numbers.screen.height,
    width: numbers.screen.width,
  },
  scroll_style: {},
  scroll_container: {
    minHeight: numbers.screen.height,
    width: numbers.screen.width,
    paddingHorizontal: numbers.padding.l,
    paddingBottom: 100,
  },
})
export default styles
