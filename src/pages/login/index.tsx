import React, {useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {numbers} from '../../assets'
import {Icon, Input} from '../../components'
import styles from './styles'

function LoginScreen(): JSX.Element {
  const [loginStatu, setLoginStatu] = useState<'u' | 'p'>('u')

  const changeLoginStatu = (status: 'u' | 'p') => {
    setLoginStatu(status)
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.flex1_center}>
          <Text>Wellcome My App</Text>
        </View>
        <View style={styles.flex1_center}>
          <View style={styles.input_container}>
            {loginStatu === 'u' && (
              <Input label="E-mail or Username" maxLength={16} />
            )}
            {loginStatu === 'p' && (
              <Input label="Password" secureTextEntry maxLength={16} />
            )}
          </View>
          {loginStatu === 'p' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => changeLoginStatu('u')}>
              <Text>Change e-mail or username </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.bottomView}>
        <Icon
          iconType="Entypo"
          name="arrow-right"
          size={numbers.icon.xxl}
          onPress={() => changeLoginStatu('p')}
          isCircle
        />
      </View>
    </View>
  )
}

export default LoginScreen
