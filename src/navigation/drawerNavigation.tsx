import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import WelcomeScreen from '../pages/drawer/welcome'

const Drawer = createDrawerNavigator()

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
