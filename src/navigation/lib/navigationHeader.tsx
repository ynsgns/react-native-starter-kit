import * as React from 'react'
import {DrawerHeaderProps} from '@react-navigation/drawer'
import {View} from 'react-native'
import {Icon, Label} from '../../components'
import {colors} from '../../assets'
import {CommonActions} from '@react-navigation/native'
import styles from '../assets/styles'

function NavigationHeader(props: DrawerHeaderProps): JSX.Element {
  const {route, navigation} = props
  const {navigate} = navigation
  const {name} = route
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Icon iconType="Feather" name="menu" size={24} color={colors.black} />
      </View>
      <View style={styles.headerTitle}>
        <Label title={name} bold large />
      </View>
      <View style={styles.flex1}>
        <Icon
          iconType="AntDesign"
          name="logout"
          size={24}
          color={colors.error}
          onPress={() => {
            navigate('Login')
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'Login'}],
              }),
            )
          }}
        />
      </View>
    </View>
  )
}

export default NavigationHeader
