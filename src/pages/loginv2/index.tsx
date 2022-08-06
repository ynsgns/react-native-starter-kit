import React, {useState} from 'react'
import {View} from 'react-native'
import {Container, Input, Label, Loading} from '../../components'
import {LoginProps} from './assets/types'
import styles from './assets/styles'
import Button from '../../components/button'

function LoginScreen({navigation}: LoginProps): JSX.Element {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [pageLoading, setPageLoading] = useState<boolean>(true)

  const goDrawerNavigation = () => {
    navigation.navigate('DrawerNavigation')
  }

  const onChangeUserName = (text: string) => {
    setUsername(text)
  }

  const onChangePassword = (text: string) => {
    setPassword(text)
  }
  const buttonDisabled = !!username && !!password

  return (
    <Container>
      <Loading
        isShow={pageLoading}
        onEndingLoadind={() => setPageLoading(false)}
      />
      <View style={styles.flex1_center}>
        <Label title="LOGO" bold xxl />
      </View>
      <View style={styles.flex1_center}>
        <View style={styles.flex1_center}>
          <Input
            label="E-mail or Username"
            value={username}
            onChangeText={onChangeUserName}
            maxLength={16}
            isCircle
          />
          <Input
            label="Password"
            secureTextEntry
            maxLength={16}
            autoFocus
            isCircle
            onChangeText={onChangePassword}
            value={password}
          />

          <Button
            title="Register"
            isLink
            onPress={goDrawerNavigation}
            containerStyle={styles.buttonStyle}
          />
        </View>
        <Button
          title="Login"
          disabled={!buttonDisabled}
          circle
          onPress={goDrawerNavigation}
          containerStyle={styles.buttonStyle}
        />
      </View>
    </Container>
  )
}

export default LoginScreen
