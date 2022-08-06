import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {colors, numbers} from '../../assets'
import Label from '../label'
import styles from './assets/styles'
import {ButtonProps} from './assets/types'

function Button(props: ButtonProps): JSX.Element {
  const {
    titleStyle,
    title,
    circle,
    textColor,
    bgColor,
    containerStyle,
    isLink,
    disabled,
  } = props || {}
  const borderRadius = circle ? 99 : numbers.padding.md
  const backgroundColor = isLink
    ? colors.transparent
    : bgColor || colors.cyan + (disabled ? '80' : '')
  const txtColor = textColor || isLink ? colors.cyan : colors.white

  return (
    <View style={[isLink ? {} : styles.width100, containerStyle || {}]}>
      <TouchableOpacity
        style={[styles.container, {borderRadius, backgroundColor}]}
        activeOpacity={0.7}
        {...props}>
        <Label
          title={title}
          color={txtColor}
          style={[isLink ? styles.link_title : {}, titleStyle]}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Button
