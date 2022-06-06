import { StreamChat } from 'stream-chat'
import {
  Channel,
  Chat,
  OverlayProvider,
  MessageList,
  MessageInput,
  Thread,
  useMessageContext,
} from 'stream-chat-expo'
import api from '../../api'
import React from 'react'
import { Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Container = styled.View`
  flex: 1;
`

const client = StreamChat.getInstance('ztx3eqscm6g2')

function Room() {
  const [channel, setChannel] = useState(null)
  useEffect(() => {
    ;(async () => {
      try {
        await client.setGuestUser({
          id: 'resrc',
          name: 'resrc',
        })
      } catch (e) {
        console.log(e)
      }

      try {
        const channel = await client.channel(
          'messaging',
          'ssac_team_7f9739ee-c94a-4ce5-85cb-8b1535de4913',
          {
            name: 'ssac-team',
          },
        )
        setChannel(channel)
      } catch (e) {
        console.log(e)
      }
    })()
    return () => {
      client.disconnectUser()
    }
  }, [])
  if (!channel) {
    return null
  }

  return (
    <Container>
      <OverlayProvider>
        <Chat client={client}>
          <Channel channel={channel}>
            <MessageList />
          </Channel>
        </Chat>
      </OverlayProvider>
    </Container>
  )
}

export default Room
