import React, {useState} from 'react'
import {Pressable, View} from 'react-native'
import {colors, numbers} from '../../assets'
import BottomSheet from '../bottomsheet'
import Icon from '../icon'
import Label from '../label'
import styles from './assets/styles'

function Select() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onSelectPress = () => {
    setIsOpen(!isOpen)
  }

  const modalCloseHandle = (evt: boolean) => {
    setIsOpen(evt)
  }

  return (
    <View style={styles.container}>
      <Label title="Ttitle" color={colors.grey_dark} />
      <Pressable style={styles.button} onPress={onSelectPress}>
        <View style={styles.leftView}>
          <Label title="Selected item" />
        </View>
        <View style={styles.rightView}>
          <Icon
            iconType="Ionicons"
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={numbers.fontSize.xl}
          />
        </View>
      </Pressable>
      <BottomSheet
        title="Select Title"
        isShow={isOpen}
        handleClosePress={modalCloseHandle}
      />
    </View>
  )
}

export default Select
