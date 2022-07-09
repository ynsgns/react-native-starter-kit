import {StyleSheet} from 'react-native'
import {colors, commonStyle} from '../../assets'

const styles = StyleSheet.create({
  headerView: {
    ...commonStyle.shadow,
    flex: 7,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cyan,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  bottomView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container: {
    width: '60%',
  },
  flex1_center: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 24,
  },
  userName: {
    marginTop: 48,
  },
})

export default styles
