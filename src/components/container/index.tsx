import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native'
import styles from './assets/style'
import {ContainerProps} from './assets/types'

function Container({children}: ContainerProps) {
  return (
    <SafeAreaView style={styles.view_style}>
      <View style={styles.view_style}>
        <KeyboardAvoidingView
          style={styles.keyboardView_style}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={100}>
          <ScrollView
            style={styles.scroll_style}
            contentContainerStyle={styles.scroll_container}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default Container
