import {Platform, StyleSheet} from 'react-native'
import {colors, commonStyle} from '../../assets'

const styles = StyleSheet.create({
  container: {
    ...commonStyle.shadow,
    paddingTop: Platform.OS === 'ios' ? 20 : 0, // only for IOS to give StatusBar Space
    backgroundColor: colors.bg,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 4,
    paddingHorizontal: 12,
    height: 80,
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
