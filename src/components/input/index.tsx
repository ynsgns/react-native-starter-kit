import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import {colors} from '../../assets'
import styles from './assets/styles'
import {InputProps} from './assets/types'

function Input(props: InputProps) {
  const {
    label,
    inputStyle,
    containerStyle,
    onChangeText,
    isWhite = false,
  } = props || {}
  const [inputValue, setInputValue] = useState<string>('')
  const _onChangeText = (evt: string) => {
    setInputValue(evt)
    if (onChangeText) {
      onChangeText(evt)
    }
  }
  return (
    <View style={[styles.container, containerStyle || {}]}>
      <Text style={isWhite ? styles.label_white : styles.label}>
        {(inputValue && label && label) || ''}
      </Text>
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
