import {StyleSheet} from 'react-native'
import {colors, commonStyle, numbers} from '../../../assets'

const styles = StyleSheet.create({
  panel: {
    ...commonStyle.shadow_soft,
    width: '100%',
    backgroundColor: colors.white,
    padding: numbers.padding.xxl,
    borderRadius: numbers.padding.md,
    marginVertical: numbers.padding.md,
  },
  labe_style: {
    marginBottom: numbers.padding.s,
  },
})

export default styles
