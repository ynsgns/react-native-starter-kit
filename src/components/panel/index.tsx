import React from 'react'
import {View} from 'react-native'
import Label from '../label'
import styles from './assets/styles'
import {FormProps} from './assets/types'

function Panel({children, title = ''}: FormProps) {
  return (
    <View style={styles.panel}>
      {title && <Label title={title} large bold style={styles.labe_style} />}
      {children}
    </View>
  )
}

export default Panel
