import React from 'react'
import {View} from 'react-native'
import {numbers} from '../../assets'
import {Icon, Input} from '../../components'
import styles from './styles'

function LoginScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Input label="Name or Username" />
      <Icon
        iconType="Entypo"
        name="arrow-right"
        size={numbers.icon.xxl}
        isCircle
      />
    </View>
  )
}

export default LoginScreen
