import {LegacyRef} from 'react'
import {TextInput, TextInputProps, TextStyle, ViewStyle} from 'react-native'

export type InputProps = {
  ref?: LegacyRef<TextInput> | undefined
  label?: string
  inputStyle?: TextStyle
  containerStyle?: ViewStyle
  isWhite?: boolean
} & TextInputProps
