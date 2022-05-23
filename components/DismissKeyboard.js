import React from 'react'
import PropTypes from 'prop-types'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

export default ({ children }) => {
  const onPress = () => Keyboard.dismiss()
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  )
}
