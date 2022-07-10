import * as React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import FormScreen from '../pages/drawer/form'

const Drawer = createDrawerNavigator()

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="FormScreen" component={FormScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
