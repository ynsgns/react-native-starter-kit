import {ViewProps} from 'react-native'
import {LabelProps} from '../../label/assets/types'

export type ButtonProps = {
  title: string
  titleStyle?: LabelProps
  bgColor?: string
  circle?: boolean
  center?: boolean
} & ViewProps
