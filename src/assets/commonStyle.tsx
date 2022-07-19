import {StyleSheet} from 'react-native'
import colors from './colors'

const commonStyle = StyleSheet.create({
  shadow: {
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,

    elevation: 16,
  },
  shadow_top: {
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,

    elevation: 16,
  },
  shadow_soft: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.0,

    elevation: 6,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default commonStyle
