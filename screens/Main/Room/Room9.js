import styled from 'styled-components/native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import api from '../../../api'
import Text from 'react-native'
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies'
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Tex2t = styled.Text``

export default () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [reply, setReply] = useState([])
  const [text, setText] = useState('')
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
        sender: 'ssac',
        receiver: 'resrs',
        message: message[0].text,
        timestamp: message[0].createdAt,
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

  const getMessage = async () => {
    try {
      const msg = await api.getMessage()
      console.log(msg.data[0].message)
      setText(msg.data[0].message())
      return setReply([
        {
          _id: 1,
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'username',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    } catch (e) {
      alert(`메세지 로드에 실패 했습니다. ${e}`)
    } finally {
      setLoading(false)
    }
  }

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    )

    const message = messages[0].text
    handleSubmit(messages)
  }, [])

  const handleDjangoResponse = () => {}
    const r = getMessages()
    this.sendBotResponse(text)
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages)
      }}
      user={{
        _id: 1,
      }}
    />
  )
}
