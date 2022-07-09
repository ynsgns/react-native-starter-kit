import React from 'react'
import {ViewStyle} from 'react-native'

export type FadeInViewProps = {
  toValue: number
  duration?: number
  children?: React.ReactNode
  containlerStyle?: ViewStyle
  animatedField?: string
  onAnimationEnding?: () => void
}
