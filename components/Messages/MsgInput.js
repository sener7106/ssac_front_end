import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import colors from '../../colors'

const { width } = Dimensions.get('screen')

const Container = styled.TextInput`
  width: 100%;
  height: 80%;
  padding: 11px 10px;
  border: 0px solid gray;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
`

const Input = ({ value, placeholder, onSubmitEditing, onChangeText }) => (
  <Container
    onSubmitEditing={onSubmitEditing}
    onChangeText={onChangeText}
    value={value}
    returnKeyType="send"
    placeholder={placeholder}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
