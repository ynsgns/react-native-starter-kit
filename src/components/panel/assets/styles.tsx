import {StyleSheet} from 'react-native'
import {colors, commonStyle, numbers} from '../../../assets'

const styles = StyleSheet.create({
  panel: {
    ...commonStyle.shadow,
    backgroundColor: colors.white,
    width: '100%',
    padding: numbers.padding.l,
    borderRadius: numbers.padding.l,
    marginVertical: numbers.padding.md,
  },
})

export default styles
