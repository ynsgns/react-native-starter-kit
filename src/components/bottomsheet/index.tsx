import React, {useEffect, useState} from 'react'
import {Modal, Pressable, Text, View} from 'react-native'
import {numbers} from '../../assets'
import styles from './assets/styles'
import {BottomSheetProps} from './assets/types'
import {useSwipe} from './lib/useSwipe'

const topViewHeight = numbers.screen.height * 0.4
const bottomViewHeight = numbers.screen.height * 0.6

function BottomSheet({
  title,
  isShow,
  handleClosePress,
  children,
}: BottomSheetProps) {
  const [viewBottomMargin, setViewBottomMargin] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const {onTouchStart, onTouchEnd, onTouchMovie} = useSwipe(
    onSwipeUp,
    onSwipeDown,
    6,
  )

  useEffect(() => {
    setIsOpen(isShow)
    setViewBottomMargin(0)
  }, [isShow])

  function onSwipeUp() {}

  function onSwipeDown() {
    if (viewBottomMargin < 0) {
      onRequestClose()
    } else {
      setViewBottomMargin(0)
    }
  }

  const _onTouchMovie = (e: any) => {
    const num = onTouchMovie(e)
    const diffBottom = bottomViewHeight - num
    if (num > 10) {
      setViewBottomMargin(diffBottom)
    }
  }

  const onRequestClose = () => {
    handleClosePress(!isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <Pressable
          style={[
            styles.topView,
            {
              height: topViewHeight,
            },
          ]}
          onPress={onRequestClose}
        />
        <View
          style={[
            styles.modalView,
            {height: bottomViewHeight, marginBottom: viewBottomMargin},
          ]}>
          <View
            style={styles.modalViewTop}
            onTouchStart={onTouchStart}
            onTouchMove={_onTouchMovie}
            onTouchEnd={onTouchEnd}>
            <View style={styles.modalTopLine} />
            <Text style={styles.modalTitle}>{title || ''}</Text>
          </View>

          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </Modal>
  )
}

export default BottomSheet
