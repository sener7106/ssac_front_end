import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  NativeModules,
  TouchableOpacity,
} from 'react-native'
import SendBtn from './SendBtn'
const BubbleView = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: rgba(22, 163, 74, 0.6);
  border-radius: 15px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 15px;
  align-self: 'flex-start';
`

const BubbleText = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
  color: white;
`

// const Bubble = ({ keys, messages, username, id }) => {
//   if (username == 'ssac') {
//     return (
//       <BubbleView key={keys} id={id} username={username}>
//         <BubbleText>{messages}</BubbleText>
//       </BubbleView>
//     )
//   } else {
//     return (
//       <BubbleReply key={keys} id={Date.now} username={username}>
//         <BubbleText>{messages}</BubbleText>
//       </BubbleReply>
//     )
//   }
// }
const Bubble = ({ key, messages, onPress }) => {
  return (
    <BubbleView key={key} onPress={onPress}>
      <BubbleText>{messages}</BubbleText>
    </BubbleView>
  )
}

export default Bubble
