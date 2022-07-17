import {PropsWithChildren} from 'react'

export type BottomSheetProps = {
  title: string
  description?: string
  isShow: boolean
  handleClosePress: (isShow: boolean) => void
} & PropsWithChildren

export type viewHeightsType = {
  topViewHeight: number
  bottomViewHeight: number
}
