import React, {useEffect, useRef} from 'react'
import {Animated, Easing} from 'react-native'
import {FadeInViewProps} from '../assets/types'
0
const FadeInView = (props: FadeInViewProps) => {
  const {
    toValue,
    animatedField = 'height',
    containlerStyle,
    duration = 1,
    onAnimationEnding = undefined,
    children,
  } = props || {}
  const fadeAnim = useRef(new Animated.Value(duration)).current // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.cubic,
    }).start(onAnimationEnding)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeAnim, toValue])

  return (
    <Animated.View // Special animatable View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: '100%',
        ...containlerStyle,
        [animatedField]: fadeAnim, // Bind opacity to animated value
      }}>
      {children}
    </Animated.View>
  )
}
export default FadeInView
