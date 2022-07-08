import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greySoft_2,
    padding: numbers.padding.xl,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    flex: 7,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,

    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
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
})

export default styles
