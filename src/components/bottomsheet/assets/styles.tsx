import {StyleSheet} from 'react-native'
import {colors, commonStyle, numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: numbers.screen.width,
    backgroundColor: colors.transparent,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },
  topView: {
    width: numbers.screen.width,
  },
  modalView: {
    ...commonStyle.shadow_top,
    width: numbers.screen.width,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    padding: 35,
  },
  modalViewTop: {
    width: numbers.screen.width,
    alignItems: 'center',
    marginTop: -35,
  },
  modalTopLine: {
    ...commonStyle.shadow,
    backgroundColor: colors.greySoft_2,
    height: 6,
    width: '40%',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: numbers.fontSize.l,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
  },
})

export default styles
