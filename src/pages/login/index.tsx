import React, {useState} from 'react'
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native'
import {numbers} from '../../assets'
import {
  Container,
  Icon,
  Input,
  Label,
  Animations,
  Loading,
} from '../../components'
import {LoginProps} from './assets/types'
import styles from './assets/styles'

const headerViewH = numbers.screen.height * 0.69

function LoginScreen({navigation}: LoginProps): JSX.Element {
  const [loginStatu, setLoginStatu] = useState<'u' | 'p'>('u')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [headerViewHeight, setHeaderViewHeight] = useState<number>(headerViewH)
  const [loading, setLoading] = useState<boolean>(false)
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  const changeLoginStatu = () => {
    if (loginStatu === 'u' && username.length > 0) {
      setLoginStatu('p')
    } else if (password.length > 0) {
      setHeaderViewHeight(0)
      setLoading(true)
      setTimeout(() => {
        //like error case
        setHasError(true)
        setLoading(false)
        setHeaderViewHeight(headerViewH)
        // setLoginStatu('u')
        setUsername('')
        setPassword('')

        navigation.navigate('DrawerNavigation')
      }, 1500)
    }
  }

  const onChangeUserName = (text: string) => {
    if (hasError) {
      setHasError(false)
    }
    setUsername(text)
  }

  const onChangePassword = (text: string) => {
    if (hasError) {
      setHasError(false)
    }
    setPassword(text)
  }

  const disabledNext = loginStatu === 'u' ? !username : !password

  return (
    <Container>
      <Loading
        isShow={pageLoading}
        onEndingLoadind={() => setPageLoading(false)}
      />
      <View style={styles.flex7}>
        <Animations.FadeInView
          toValue={headerViewHeight}
          duration={headerViewH}>
          <View style={styles.headerView}>
            <View style={styles.flex1_center}>
              <Label title="Wellcome My App" isWhite size={24} />
              <Label
                fontWeight="bold"
                isWhite
                title={loginStatu === 'p' ? username.toLocaleLowerCase() : ''}
                containerStyle={styles.userName}
              />
            </View>
            <View style={styles.flex1_center}>
              <View style={styles.input_container}>
                {loginStatu === 'u' && (
                  <Input
                    label="E-mail or Username"
                    value={username}
                    onChangeText={onChangeUserName}
                    onSubmitEditing={changeLoginStatu}
                    maxLength={16}
                    isWhite
                  />
                )}
                {loginStatu === 'p' && (
                  <Input
                    label="Password"
                    secureTextEntry
                    maxLength={16}
                    autoFocus
                    onSubmitEditing={changeLoginStatu}
                    onChangeText={onChangePassword}
                    value={password}
                    isWhite
                  />
                )}
                {hasError && (
                  <Label
                    title="* e-mail veya şifre hatalı"
                    isError
                    containerStyle={styles.marginTop12}
                  />
                )}
              </View>
            </View>
          </View>
        </Animations.FadeInView>
        {loading && (
          <View style={styles.flex1_center}>
            <ActivityIndicator size={'large'} />
          </View>
        )}
      </View>
      {!loading && (
        <View style={styles.bottomView}>
          <Icon
            iconType="Entypo"
            name="arrow-right"
            size={numbers.icon.xxl}
            onPress={changeLoginStatu}
            disabled={disabledNext}
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
      )}
    </Container>
  )
}

export default LoginScreen
