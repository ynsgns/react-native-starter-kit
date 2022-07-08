import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import styles from './styles'
import {InputProps} from './types'

function Input(props: InputProps) {
  const {label, onChangeText} = props || {}
  const [inputValue, setInputValue] = useState<string>('')
  const _onChangeText = (evt: string) => {
    setInputValue(evt)
    if (onChangeText) {
      onChangeText(evt)
    }
  }
  return (
    <View style={styles.container}>
      {inputValue && label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        placeholder={label}
        value={inputValue}
        onChangeText={_onChangeText}
        style={[styles.input, props?.style || {}]}
      />
    </View>
  )
}

export default Input
