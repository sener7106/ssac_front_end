import React from 'react'
import { ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import colors from '../../colors'
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get('screen')

const Text = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.accent ? 'white' : colors.black)};
`

const SendBtn = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name="mic-circle-outline" size={42} color="teal" />
  </TouchableOpacity>
)

SendBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  accent: PropTypes.bool,
}

export default SendBtn
