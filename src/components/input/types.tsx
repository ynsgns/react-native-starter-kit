import {TextInputProps, TextStyle, ViewStyle} from 'react-native'

export type InputProps = {
  label?: string
  inputStyle?: TextStyle
  containerStyle?: ViewStyle
  isWhite?: boolean
} & TextInputProps
