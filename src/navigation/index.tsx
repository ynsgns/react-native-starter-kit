// In App.js in a new project

import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../pages/login'
import DrawerNavigation from './drawerNavigation'
const AppStack = createNativeStackNavigator()

function App() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <AppStack.Screen name="Login" component={LoginScreen} />
    </AppStack.Navigator>
  )
}

export default App
