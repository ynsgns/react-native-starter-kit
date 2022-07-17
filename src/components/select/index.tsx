import React, {useState} from 'react'
import {FlatList, ListRenderItemInfo, Pressable, View} from 'react-native'
import {colors, numbers} from '../../assets'
import BottomSheet from '../bottomsheet'
import Icon from '../icon'
import Label from '../label'
import styles from './assets/styles'
import {SelectOptionsType, SelectPropsType} from './assets/types'
import RenderItem from './lib/renderItem'

const emptySelectValue: SelectOptionsType = {value: '', label: ''}

function Select({
  title,
  placeholder,
  options,
  onSelected,
  value,
}: SelectPropsType) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectValue, setSelectedValue] = useState<SelectOptionsType>(
    value || emptySelectValue,
  )

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const modalCloseHandle = (evt: boolean) => {
    setIsOpenModal(evt)
  }
  const onSelectItem = (selectedItem: SelectOptionsType, index: number) => {
    setSelectedValue(selectedItem)
    onSelected?.(selectedItem, index)
    toggleModal()
  }

  const renderItem = (item: ListRenderItemInfo<SelectOptionsType>) => {
    return <RenderItem data={item} onSelectItem={onSelectItem} />
  }

  return (
    <View style={styles.container}>
      <Label title={title} color={colors.grey_dark} small />
      <Pressable style={styles.button} onPress={toggleModal}>
        <View style={styles.leftView}>
          <Label
            title={selectValue?.label || placeholder || title}
            color={selectValue?.label ? colors.black : colors.greySoft}
          />
        </View>
        <View style={styles.rightView}>
          <Icon
            iconType="Ionicons"
            name={isOpenModal ? 'chevron-up' : 'chevron-down'}
            size={numbers.fontSize.xl}
          />
        </View>
      </Pressable>
      <BottomSheet
        title={placeholder || title}
        isShow={isOpenModal}
        handleClosePress={modalCloseHandle}>
        <FlatList data={options} renderItem={renderItem} />
      </BottomSheet>
    </View>
  )
}

export default Select
