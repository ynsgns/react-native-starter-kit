import React from 'react'
import {Text, TextInput, View} from 'react-native'
import styles from './styles'
import {InputProps} from './types'

function Input(props: InputProps) {
  const {label} = props || {}
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...props} />
    </View>
  )
}

export default Input
