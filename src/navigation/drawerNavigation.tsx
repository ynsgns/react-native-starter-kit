import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import FormScreen from '../pages/drawer/form'
import NavigationHeader from './lib/navigationHeader'

const Drawer = createDrawerNavigator()

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: NavigationHeader,
      }}>
      <Drawer.Screen name="FormScreen" component={FormScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
