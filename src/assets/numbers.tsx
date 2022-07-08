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
  },
}

export default numbers
