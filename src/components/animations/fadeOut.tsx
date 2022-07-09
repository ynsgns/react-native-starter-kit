import React, {useEffect, useRef} from 'react'
import {Animated} from 'react-native'
import {FadeInViewProps} from './assets/types'
0
const FadeInView = (props: FadeInViewProps) => {
  const {toValue, children} = props || {}
  const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue,
      useNativeDriver: false,
    }).start()
  }, [fadeAnim, toValue])

  return (
    <Animated.View // Special animatable View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: '100%',
        height: fadeAnim, // Bind opacity to animated value
      }}>
      {children}
    </Animated.View>
  )
}
export default FadeInView
