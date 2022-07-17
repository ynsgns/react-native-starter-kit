import React from 'react'
import {Text, View} from 'react-native'
import {colors, numbers} from '../../assets'
import {LabelProps} from './assets/types'

function Label(props: LabelProps) {
  const {
    title,
    containerStyle,
    fontWeight = 'normal',
    size = numbers.fontSize.md,
    isWhite = false,
    isError = false,
    bold = false,
    center = false,
    color,
    xs,
    small,
    md,
    large,
    xl,
    xxl,
  } = props || {}
  const textColor =
    color || (isError ? colors.error : isWhite ? colors.white : colors.black)

  const defaultFontWeight = bold ? 'bold' : fontWeight
  const textAlign = center ? 'center' : 'left'

  const getFontSize = (): number => {
    let fontSize = size
    if (xs) {
      fontSize = numbers.fontSize.xs
    } else if (small) {
      fontSize = numbers.fontSize.s
    } else if (md) {
      fontSize = numbers.fontSize.md
    } else if (large) {
      fontSize = numbers.fontSize.l
    } else if (xl) {
      fontSize = numbers.fontSize.xl
    } else if (xxl) {
      fontSize = numbers.fontSize.xxl
    }
    return fontSize
  }

  return (
    <View style={containerStyle || {}}>
      <Text
        style={{
          fontSize: getFontSize(),
          color: textColor,
          fontWeight: defaultFontWeight,
          textAlign,
        }}>
        {title}
      </Text>
    </View>
  )
}

export default Label
