// In App.js in a new project

import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../pages/login'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default App
