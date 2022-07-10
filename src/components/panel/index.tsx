import React from 'react'
import {View} from 'react-native'
import Label from '../label'
import styles from './assets/styles'
import {FormProps} from './assets/types'

function Panel({children, title = ''}: FormProps) {
  return (
    <View style={styles.panel}>
      {title && <Label title={title} xl bold />}
      {children}
    </View>
  )
}

export default Panel
