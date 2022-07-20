import {ListRenderItemInfo} from 'react-native'

export type SelectPropsType = {
  title: string
  options: Array<SelectOptionsType>
  placeholder?: string
  value?: SelectOptionsType
  onSelected?: (selectedItem: SelectOptionsType, index: number) => void
}

export type RenderItemProps = {
  data: ListRenderItemInfo<SelectOptionsType>
  selectValue: SelectOptionsType
  onSelectItem: (selectedItem: SelectOptionsType, index: number) => void
}
export type SelectOptionsType = {
  label: string
  value: string | number
}
