import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    width: numbers.screen.width,
    height: numbers.screen.height,
    position: 'absolute',
    zIndex: 999,
  },
  flex1Header: {
    flex: 1,
  },
  flex1Bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  animationsViewStyle: {
    width: numbers.screen.width,
    height: numbers.screen.height * 0.5,
    backgroundColor: colors.cyan,
  },
})
export default styles
