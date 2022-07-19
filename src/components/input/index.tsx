import React, {useState} from 'react'
import {TextInput, View} from 'react-native'
import {colors} from '../../assets'
import Label from '../label'
import styles from './assets/styles'
import {InputProps} from './assets/types'

function Input(props: InputProps) {
  const {
    label,
    inputStyle,
    containerStyle,
    onChangeText,
    value,
    isWhite = false,
  } = props || {}
  const [inputValue, setInputValue] = useState<string>(value || '')
  const _onChangeText = (evt: string) => {
    setInputValue(evt)
    if (onChangeText) {
      onChangeText(evt)
    }
  }
  return (
    <View style={[styles.container, containerStyle || {}]}>
      <View style={styles.label_view}>
        <Label title={label || ' '} style={isWhite ? styles.label_white : {}} />
      </View>
      <TextInput
        {...props}
        placeholder={label}
        value={inputValue}
        onChangeText={_onChangeText}
        placeholderTextColor={isWhite ? colors.white : colors.greySoft}
        style={[isWhite ? styles.input_white : styles.input, inputStyle || {}]}
      />
    </View>
  )
}

export default Input
