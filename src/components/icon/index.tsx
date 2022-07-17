import React from 'react'
import {IconProps} from './assets/types'
import {StyleSheet, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {colors, numbers} from '../../assets'

function Icon(props: IconProps) {
  const {
    iconType,
    name,
    onPress,
    disabled = false,
    color = colors.black,
    borderColor = colors.grey,
    size = 14,
    marginRight = 0,
    isCircle = false,
  } = props || {}
  const disable = disabled || !onPress

  const renderIcon = (): React.ReactElement | null => {
    let returnComp: React.ReactElement | null = null
    const commonProps = {
      name,
      size,
      color: disabled ? colors.grey : color,
    }
    switch (iconType) {
      case 'AntDesign':
        returnComp = <AntDesign {...commonProps} />
        break
      case 'Entypo':
        returnComp = <Entypo {...commonProps} />
        break
      case 'EvilIcons':
        returnComp = <EvilIcons {...commonProps} />
        break
      case 'Feather':
        returnComp = <Feather {...commonProps} />
        break
      case 'FontAwesome':
        returnComp = <FontAwesome {...commonProps} />
        break
      case 'Foundation':
        returnComp = <Foundation {...commonProps} />
        break
      case 'Ionicons':
        returnComp = <Ionicons {...commonProps} />
        break
      case 'MaterialIcons':
        returnComp = <MaterialIcons {...commonProps} />
        break
      case 'MaterialCommunityIcons':
        returnComp = <MaterialCommunityIcons {...commonProps} />
        break
      case 'SimpleLineIcons':
        returnComp = <SimpleLineIcons {...commonProps} />
        break
      case 'Octicons':
        returnComp = <Octicons {...commonProps} />
        break
      case 'Zocial':
        returnComp = <Zocial {...commonProps} />
        break
      case 'Fontisto':
        returnComp = <Fontisto {...commonProps} />
        break
      default:
        break
    }
    return returnComp
  }

  const styles = StyleSheet.create({
    container: {
      marginRight,
      padding: 0,
    },
    container_circle: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: size + numbers.padding.xl,
      width: size + numbers.padding.xl,
      height: size + numbers.padding.xl,
    },
  })

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={isCircle ? styles.container_circle : styles.container}>
      {renderIcon()}
    </TouchableOpacity>
  )
}

export default Icon
