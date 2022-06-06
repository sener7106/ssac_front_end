import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { Text, View, NativeModules } from 'react-native'
import MsgInput from '../../../components/Messages/MsgInput'
import Bubble from '../../../components/Messages/Bubble'
import api from '../../../api'
import { Audio } from 'expo-av'
const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: white;
`
const ChatScreen = styled.ScrollView`
  flex: 1;
  height: 80%;
  background-color: white;
`
const MessageInput = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: 'center';
  align-items: 'center';
  padding: 10px;
  background-color: #fff093;
`
const { StatusBarManager } = NativeModules
const Room = () => {
  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData) => {
          setStatusBarHeight(statusBarFrameData.height)
        })
      : null
    setId(0)
  }, [])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  const [statusBarHeight, setStatusBarHeight] = useState(0)
  const [text, setText] = useState('')
  const [id, setId] = useState(0)
  const [messages, setMessages] = useState({})
  const onChangeText = (payload) => setText(payload)
  const [sound, setSound] = React.useState()
  const playSound = async () => {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync({
      uri: 'http://aichatapp.s3.amazonaws.com/combined_sound.wav',
    })
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }
  const addMessages = async () => {
    if (text === '') {
      return
    }
    const newMessages = {
      ...messages,
      [Date.now()]: {
        sender: 'ssac',
        receiver: 'resrs',
        message: text,
        timestamp: Date.now(),
      },
    }
    // save to message
    console.log(newMessages)
    setMessages(newMessages)
    await handleSubmit(newMessages)
    setText('')
    //getMessages()
    await addReply(newMessages)

    // const newsMessages = {
    //   ...newMessages,
    //   [Date.now() + 1]: {
    //     sender: 'ssac',
    //     receiver: 'resrs',
    //     message: '시발',
    //     timestamp: Date.now(),
    //   },
    // }
    // setMessages(newsMessages)
  }

  const handleSubmit = async () => {
    try {
      const { status } = await api.sendMessage({
        sender: 'ssac',
        receiver: 'resrs',
        message: text,
        timestamp: Date.now(),
      })
      if (status === 201) {
        console.log('메세지를 보냈습니다.')
        console.log(status)
      }
      /// go to sign in
    } catch (e) {
      return console.log(`메세지 전송에 실패했습니다. ${e}}`)
    }
  }

  const addReply = async (previousMessages) => {
    //if (reText ==  {
    //  return'')
    //}
    console.log('data 수집 중..')
    let text = await getMessages()
    const replyMessages = {
      ...previousMessages,
      [Date.now() + 1]: {
        sender: 'resrs',
        receiver: 'ssac',
        message: text,
        timestamp: Date.now(),
      },
    }
    console.log(replyMessages)
    setMessages(replyMessages)
  }

  const getMessages = async () => {
    try {
      console.log('서버로부터 메시지를 수신하는중...')
      const msg = await api.getMessage()

      let reply = msg.data[id].message
      setId(id + 1)
      console.log(reply)
      return reply
    } catch (e) {
      console.log(`메세지 로드에 실패 했습니다. ${e}`)
    }
  }

  return (
    <Container
      behavior={'padding'}
      keyboardVerticalOffset={statusBarHeight + 30}
    >
      <ChatScreen>
        {Object.keys(messages).map((key) => (
          <Bubble
            key={key}
            messages={messages[key].message}
            onPress={playSound}
          />
        ))}
      </ChatScreen>
      <MessageInput>
        <MsgInput
          onSubmitEditing={addMessages}
          onChangeText={onChangeText}
          placeholder="메세지를 입력해주세요"
          value={text}
        />
      </MessageInput>
    </Container>
  )
}
export default Room
