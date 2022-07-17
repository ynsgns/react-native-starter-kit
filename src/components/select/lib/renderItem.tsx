import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {colors, numbers} from '../../../assets'
import Icon from '../../icon'
import Label from '../../label'
import styles from '../assets/styles'
import {RenderItemProps} from '../assets/types'

function RenderItem({data, onSelectItem}: RenderItemProps) {
  const {item, index} = data
  const {label} = item

  const onItemPress = () => {
    onSelectItem(item, index)
  }
  return (
    <View style={styles.renderItem_container}>
      <TouchableOpacity style={styles.renderItem_button} onPress={onItemPress}>
        <Icon
          iconType="MaterialIcons"
          name="subdirectory-arrow-right"
          size={numbers.fontSize.l}
          color={colors.greySoft}
          marginRight={8}
        />
        <Label title={label} color={colors.black} />
      </TouchableOpacity>
      <View style={styles.renderItem_lines} />
    </View>
  )
}

export default RenderItem
