import { useState, useEffect } from 'react'
import { StreamChat } from 'stream-chat'
import {
  chatApiKey,
  chatUserId,
  chatUserName,
  chatUserToken,
} from './chatConfig'

const user = {
  id: chatUserId,
  name: chatUserName,
}
const chatClient = StreamChat.getInstance(chatApiKey)

export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false)
  const [channel, setChannel] = useState(null)
  useEffect(() => {
    const setUpClient = async () => {
      try {
        await chatClient.setGuestUser({
          id: String(Math.floor(Math.random() * Date.now())),
          name: 'Anonymous',
        })
        const channel = await chatClient.channel('messaging', { name: 'test' })
        setChannel(channel)
        //await chatClient.connnectUser(user, chatUserToken)
        setClientIsReady(true)
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            `An error occured while connecting the user : ${error.message}`,
          )
        }
      }
      // if the chat client has a value in the fild `userId`, a user is already connected

      if (!chatClient.userID) {
        setUpClient()
      }
    }
  }, [])
  return {
    clientIsReady,
  }
}
