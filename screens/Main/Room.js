import styled from 'styled-components/native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import api from '../../api'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Text = styled.Text``

export default () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '안녕! / Hi!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'username',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const handleSubmit = async (message) => {
    setLoading(true)
    try {
      const { status } = await api.sendMessage({
        text: message[0].text,
      })
      if (status === 201) {
        alert('메세지를 보냈습니다.')
        console.log(status)
      }
      /// go to sign in
    } catch (e) {
      alert(`메세지 전송에 실패했습니다. ${e}}`)
    } finally {
      setLoading(false)
    }
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages)
        handleSubmit(messages)
      }}
      user={{
        _id: 1,
      }}
    />
  )
}
