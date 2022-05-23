import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import colors from '../../colors'

const { width } = Dimensions.get('screen')

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 10px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 15px;
  font-weight: 500;
`

const Input = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
  keyboardType,
}) => (
  <Container
    keyboardType={keyboardType}
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => stateFn(text)}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  stateFn: PropTypes.func,
}

export default Input
