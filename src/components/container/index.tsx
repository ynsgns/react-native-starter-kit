import React from 'react'
import {ScrollView} from 'react-native'
import styles from './assets/style'
import {ContainerProps} from './assets/types'

function Container({children}: ContainerProps) {
  return (
    <ScrollView contentContainerStyle={styles.scroll_container}>
      {children}
    </ScrollView>
  )
}

export default Container
