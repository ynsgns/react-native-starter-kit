import {Platform, StyleSheet} from 'react-native'
import {colors, numbers} from '../../../assets'

const styles = StyleSheet.create({
  container: {
    marginTop: numbers.padding.l,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.greySoft,
    paddingHorizontal: 8,
    height: Platform.OS === 'ios' ? 52 : 50,
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.grey_dark,
  },
  label_view: {
    alignSelf: 'flex-start',
    marginBottom: numbers.padding.s,
  },
  leftView: {
    flex: 8,
    justifyContent: 'center',
  },
  rightView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  //renderItem
  renderItem_container: {
    marginBottom: 8,
    justifyContent: 'center',
  },
  renderItem_button: {
    paddingVertical: numbers.padding.l,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 4,
    paddingLeft: 8,
  },
  renderItem_lines: {
    backgroundColor: '#eee',
    width: '100%',
    height: 1,
  },
})

export default styles
