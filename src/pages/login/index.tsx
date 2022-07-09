import React, {useState} from 'react'
import {Alert, Text, TouchableOpacity, View} from 'react-native'
import {numbers} from '../../assets'
import {Container, Icon, Input, Label} from '../../components'
import styles from './styles'

function LoginScreen(): JSX.Element {
  const [loginStatu, setLoginStatu] = useState<'u' | 'p'>('u')
  const [username, setUsername] = useState<string>('')

  const changeLoginStatu = () => {
    if (loginStatu === 'u') {
      setLoginStatu('p')
    } else {
      Alert.alert('send login requset')
    }
  }

  const onChangeUserName = (text: string) => {
    setUsername(text)
  }

  return (
    <Container>
      <View style={styles.headerView}>
        <View style={styles.flex1_center}>
          <Label title="Wellcome My App" isWhite size={24} />
          {loginStatu === 'p' && (
            <Label
              fontWeight="bold"
              isWhite
              title={username.toLocaleLowerCase()}
              containerStyle={styles.userName}
            />
          )}
        </View>
        <View style={styles.flex1_center}>
          <View style={styles.input_container}>
            {loginStatu === 'u' && (
              <Input
                label="E-mail or Username"
                value={username}
                onChangeText={onChangeUserName}
                maxLength={16}
                isWhite
              />
            )}
            {loginStatu === 'p' && (
              <Input label="Password" secureTextEntry maxLength={16} isWhite />
            )}
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Icon
          iconType="Entypo"
          name="arrow-right"
          size={numbers.icon.xxl}
          onPress={changeLoginStatu}
          isCircle
        />
        {loginStatu === 'p' && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setLoginStatu('u')}>
            <Text>Change e-mail or username </Text>
          </TouchableOpacity>
        )}
      </View>
    </Container>
  )
}

export default LoginScreen
