// In App.js in a new project

import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../pages/login'
import LoginV2Screen from '../pages/loginv2'
import DrawerNavigation from './drawerNavigation'
const AppStack = createNativeStackNavigator()

function App() {
  return (
    <AppStack.Navigator
      initialRouteName="LoginV2Screen"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="LoginV2Screen" component={LoginV2Screen} />
      <AppStack.Screen name="Login" component={LoginScreen} />
      <AppStack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </AppStack.Navigator>
  )
}

export default App
