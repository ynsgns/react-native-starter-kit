import React, {useState} from 'react'
import {View} from 'react-native'
import {Container, Input, Loading, Panel, Select} from '../../../components'
import Button from '../../../components/button'
import {SelectOptionsType} from '../../../components/select/assets/types'
import styles from './assets/styles'

const options: Array<SelectOptionsType> = [
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
  {label: 'Galatasaray', value: '1905'},
  {label: 'Karşıyaka', value: '1912'},
]

function WelcomeScreen(): JSX.Element {
  const [pageLoading, setPageLoading] = useState<boolean>(true)

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
          <Select title="Choose your favorite team" options={options} />
          <Button title="Button" />
        </Panel>
      </View>
    </Container>
  )
}

export default WelcomeScreen
