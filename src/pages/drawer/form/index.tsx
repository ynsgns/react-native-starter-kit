import React, {useState} from 'react'
import {View} from 'react-native'
import {testOptionsList} from '../../../assets/testData'
import {Container, Input, Loading, Panel, Select} from '../../../components'
import Button from '../../../components/button'
import styles from './assets/styles'

function WelcomeScreen(): JSX.Element {
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  // React.useEffect(() => {
  //   NativeModules.DevMenu.show()
  // }, [])

  return (
    <Container>
      <Loading
        isShow={pageLoading}
        onEndingLoadind={() => setPageLoading(false)}
      />
      <View style={styles.conteiner}>
        <Panel title="Example form title">
          <Input label="Name" />
          <Input label="Surname" />
          <Select title="Choose your city" options={testOptionsList} />
        </Panel>
        <Button title="Save" />
      </View>
    </Container>
  )
}

export default WelcomeScreen
