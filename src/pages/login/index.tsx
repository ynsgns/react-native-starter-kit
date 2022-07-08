import React from 'react'
import {View} from 'react-native'
import {Input} from '../../components'
import styles from './styles'

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Input label="Name or Username" />
    </View>
  )
}

export default LoginScreen
