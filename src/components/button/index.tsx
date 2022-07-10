import React from 'react'
import {View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {colors} from '../../assets'
import Label from '../label'
import styles from './assets/styles'
import {ButtonProps} from './assets/types'

function Button(props: ButtonProps): JSX.Element {
  const {titleStyle, circle, center, bgColor} = props || {}
  const borderRadius = circle ? 99 : 4
  const backgroundColor = bgColor || colors.cyan

  return (
    <View style={center ? styles.alignCenter : {}}>
      <TouchableOpacity
        style={[styles.container, {borderRadius, backgroundColor}]}
        activeOpacity={0.7}>
        <Label title="Button" isWhite {...titleStyle} />
      </TouchableOpacity>
    </View>
  )
}

export default Button
