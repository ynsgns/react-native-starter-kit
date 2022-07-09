import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll_style: {
    flex: 1,
  },
  scroll_container: {
    width: numbers.screen.width,
    height: numbers.screen.height,
    paddingHorizontal: 20,
  },
})
export default styles
