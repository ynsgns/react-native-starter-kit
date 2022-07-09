import {TextProps, ViewStyle} from 'react-native'

export type LabelProps = {
  title: string
  containerStyle?: ViewStyle
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined
  color?: string
  size?: number
  isError?: boolean
  isWhite?: boolean
} & TextProps
