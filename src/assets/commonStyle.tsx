import {StyleSheet} from 'react-native'
import colors from './colors'

const commonStyle = StyleSheet.create({
  shadow: {
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
})

export default commonStyle
