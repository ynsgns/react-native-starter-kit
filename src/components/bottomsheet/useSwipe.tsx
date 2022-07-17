import {Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width

export function useSwipe(onSwipeUp?: any, onSwipeDown?: any, rangeOffset = 4) {
  let firstTouch = 0

  // set user touch start position
  function onTouchStart(e: any) {
    firstTouch = e.nativeEvent.pageY
  }
  function onTouchMovie(e: any): number {
    const positionY = e.nativeEvent.pageY
    return positionY - firstTouch
  }

  // when touch ends check for swipe directions
  function onTouchEnd(e: any) {
    // get touch position and screen size
    const positionY = e.nativeEvent.pageY
    const range = windowWidth / rangeOffset
    const difference = positionY - firstTouch

    console.log('positionY - firstTouch ', difference)
    console.log('firstTouch', firstTouch)
    console.log('positionY', positionY)

    // check if position is growing positively and has reached specified range
    if (positionY - firstTouch > range) {
      onSwipeDown && onSwipeDown(difference)
    }
    // check if position is growing negatively and has reached specified range
    else if (firstTouch - positionY > range) {
      onSwipeUp && onSwipeUp(difference)
    }
  }

  return {onTouchStart, onTouchEnd, onTouchMovie}
}
