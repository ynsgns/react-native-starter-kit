import {TouchableOpacityProps, ViewStyle} from 'react-native'
import {LabelProps} from '../../label/assets/types'

export type ButtonProps = {
  title: string
  titleStyle?: LabelProps
  containerStyle?: ViewStyle
  bgColor?: string
  textColor?: string
  circle?: boolean
  isLink?: boolean
} & TouchableOpacityProps
