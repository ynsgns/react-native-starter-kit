import type {NativeStackScreenProps} from '@react-navigation/native-stack'

export type RootStackParamList = {
  //ex.
  Login: {sort: 'latest' | 'top'}
  Wellcome: undefined
  Feed: {sort: 'latest' | 'top'} | undefined
}

export type LoginScreenNavigationType = NativeStackScreenProps<
  RootStackParamList,
  'Login',
  'AppStack'
>
