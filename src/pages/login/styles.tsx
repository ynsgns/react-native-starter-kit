import {StyleSheet} from 'react-native'
import {colors, numbers} from '../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greySoft,
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
