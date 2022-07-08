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
  color?: string
  borderColor?: string
  size?: number
  isCircle?: boolean
  onPress?: () => void
}
