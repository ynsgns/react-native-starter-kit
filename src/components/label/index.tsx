import React from 'react'
import {Text, View} from 'react-native'
import {colors} from '../../assets'
import {LabelProps} from './assets/types'

function Label(props: LabelProps) {
  const {
    title,
    containerStyle,
    fontWeight = 'normal',
    size = 14,
    isWhite = false,
    color,
  } = props || {}
  const textColor = color || isWhite ? colors.white : colors.black

  return (
    <View style={containerStyle || {}}>
      <Text style={{fontSize: size, color: textColor, fontWeight}}>
        {title}
      </Text>
    </View>
  )
}

export default Label
