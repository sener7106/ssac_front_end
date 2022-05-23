import React from 'react'
import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import utils from '../../utils'

const Container = styled.View`
  padding-left: 20px;
`

export default () => (
  <Container>
    {utils.isAndroid() ? (
      <Ionicons name={'md-arrow-down'} size={24} />
    ) : (
      <SimpleLineIcons name={'arrow-down'} size={24} />
    )}
  </Container>
)
