import {ViewStyle} from 'react-native'

export type IconProps = {
  iconType:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialIcons'
    | 'MaterialCommunityIcons'
    | 'SimpleLineIcons'
    | 'Octicons'
    | 'Zocial'
    | 'Fontisto'
  name: string
  containerStyle?: ViewStyle
  color?: string
  borderColor?: string
  size?: number
  marginRight?: number
  isCircle?: boolean
  disabled?: boolean
  onPress?: () => void
}
