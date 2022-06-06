import styled from 'styled-components/native'
import React from 'react'
import { ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../colors'
const { width } = Dimensions.get('screen')

const Button = styled.View`
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-top: 15px;
  margin-left: 10px;
  background-color: ${colors.green};
`

const Text = styled.Text`
  font-weight: 600;
  font-size: 35px;
  color: white;
`

const DayBtn = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Button>
      <Text>{text}</Text>
    </Button>
  </TouchableOpacity>
)

DayBtn.propTypes = {
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
  loading: PropTypes.bool,
}

export default DayBtn
