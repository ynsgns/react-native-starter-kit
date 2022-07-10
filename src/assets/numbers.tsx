import {Dimensions} from 'react-native'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const numbers = {
  screen: {
    width,
    height,
  },
  padding: {
    xs: 2,
    s: 4,
    md: 8,
    l: 12,
    xl: 16,
    xxl: 20,
    xxxl: 24,
  },
  icon: {
    xs: 10,
    s: 12,
    md: 14,
    l: 16,
    xl: 20,
    xxl: 28,
  },
  fontSize: {
    xs: 10,
    s: 12,
    md: 14,
    l: 16,
    xl: 20,
    xxl: 28,
  },
}

export default numbers
