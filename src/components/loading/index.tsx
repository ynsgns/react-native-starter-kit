import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import {Animations} from '..'
import {numbers} from '../../assets'
import styles from './assets/style'
import {LoadingProps} from './assets/types'
const halfHeight = numbers.screen.height * 0.5
const zeroHeight = 0
function Loading({isShow, onEndingLoadind}: LoadingProps) {
  const [duration, setDuration] = useState<number>(zeroHeight)
  const [toValue, setToValue] = useState<number>(halfHeight)
  const [isShowLoaing, setIsShowLoading] = useState<boolean>(false)

  useEffect(() => {
    if (isShow === true && isShowLoaing === false) {
      setIsShowLoading(true)
    }
    if (duration === zeroHeight) {
      setDuration(halfHeight)
      setToValue(zeroHeight)
    } else {
      setDuration(zeroHeight)
      setToValue(halfHeight)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow])

  return isShowLoaing ? (
    <View style={styles.container}>
      <View style={styles.flex1Header}>
        <Animations.FadeInView
          onAnimationEnding={() => {
            if (onEndingLoadind) {
              onEndingLoadind?.()
            }
            setIsShowLoading(false)
          }}
          //   animatedField="top"
          containlerStyle={styles.animationsViewStyle}
          duration={duration}
          toValue={toValue}
        />
      </View>
      {/* <ActivityIndicator /> */}
      <View style={styles.flex1Bottom}>
        <Animations.FadeInView
          containlerStyle={styles.animationsViewStyle}
          duration={duration}
          toValue={toValue}
        />
      </View>
    </View>
  ) : null
}

export default Loading
