import {Platform, StyleSheet} from 'react-native'
import {colors, commonStyle} from '../../assets'

const styles = StyleSheet.create({
  container: {
    ...commonStyle.shadow_soft,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  flex1: {
    flex: 1,
  },
  headerTitle: {
    flex: 8,
    alignItems: 'center',
  },
})

export default styles
