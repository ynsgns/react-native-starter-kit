import React, {useState} from 'react'
import {View} from 'react-native'
import {Container, Label, Loading} from '../../../components'
import styles from './assets/styles'

function WelcomeScreen(): JSX.Element {
  const [pageLoading, setPageLoading] = useState<boolean>(true)

  return (
    <Container>
      <Loading
        isShow={pageLoading}
        onEndingLoadind={() => setPageLoading(false)}
      />
      <View style={styles.conteiner}>
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
        <Label title="test test test" />
      </View>
    </Container>
  )
}

export default WelcomeScreen
