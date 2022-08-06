import React, {useState} from 'react'
import {TextInput, View} from 'react-native'
import {colors, commonStyle} from '../../assets'
import Icon from '../icon'
import Label from '../label'
import styles from './assets/styles'
import {InputProps} from './assets/types'

function Input(props: InputProps) {
  const {
    label,
    inputStyle,
    containerStyle,
    onChangeText,
    value,
    isCircle = false,
    isWhite = false,
    secureTextEntry = false,
  } = props || {}
  const [inputValue, setInputValue] = useState<string>(value || '')
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const _onChangeText = (evt: string) => {
    setInputValue(evt)
    if (onChangeText) {
      onChangeText(evt)
    }
  }

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <View style={[styles.container, containerStyle || {}]}>
      <View style={styles.label_view}>
        <Label
          title={label || ' '}
          style={[
            isCircle ? styles.paddingLeft10 : {},
            isWhite ? styles.label_white : {},
          ]}
        />
      </View>
      <View
        style={[
          styles.input_view_container,
          isWhite ? styles.input_container_white : styles.input_container,
          isCircle ? styles.input_container_circle : {},
          inputStyle || {},
        ]}>
        <TextInput
          {...props}
          placeholder={label}
          value={inputValue}
          secureTextEntry={secureTextEntry ? !isShowPassword : false}
          onChangeText={_onChangeText}
          placeholderTextColor={isWhite ? colors.white : colors.greySoft}
          style={[
            commonStyle.flex1,
            isWhite ? styles.input_white : styles.input,
            isCircle ? styles.input_circle : {},
            inputStyle || {},
          ]}
        />
        {secureTextEntry && (
          <Icon
            iconType="Entypo"
            name={isShowPassword ? 'eye-with-line' : 'eye'}
            size={20}
            onPress={toggleShowPassword}
            containerStyle={styles.icon_container}
          />
        )}
      </View>
    </View>
  )
}

export default Input
