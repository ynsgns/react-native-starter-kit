// In App.js in a new project

import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../pages/login'
import WelcomeScreen from '../pages/welcome'

const AppStack = createNativeStackNavigator()

function App() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Login" component={LoginScreen} />
      <AppStack.Screen name="Wellcome" component={WelcomeScreen} />
    </AppStack.Navigator>
  )
}

export default App
