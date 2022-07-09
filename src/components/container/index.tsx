import React from 'react'
import {ScrollView, View} from 'react-native'
import styles from './assets/style'
import {ContainerProps} from './assets/types'

function Container({children}: ContainerProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll_style}
        contentContainerStyle={styles.scroll_container}>
        {children}
      </ScrollView>
    </View>
  )
}

export default Container
