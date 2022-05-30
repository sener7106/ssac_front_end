import { StackActions } from '@react-navigation/native'
import { LoadingIndicator } from 'stream-chat-expo'
import { useChatClient } from './useChatClient'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from 'react-native'
import { Chat, OverlayProvider } from 'stream-chat-expo'
import { StreamChat } from 'stream-chat'
import { chatApiKey } from './chatConfig'

const Stack = createStackNavigator()

const chatClient = StreamChat.getInstance('jpspdxvv29ss')
const HomeScreen = () => <Text>This is Home Scren</Text>
const ChannelListScreen = () => {
  return null
}

const NavigationStack = () => {
  const { clientIsReady } = useChatClient()
  if (!clientIsReady) {
    console.log(chatClient)
    return (
      <View>
        <Text>Loading Chat...</Text>
      </View>
    )
  }

  return (
    <OverlayProvider>
      <Chat clinet={chatClient}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack Screen name="ChannelList" component={ChannelListScreen} />
        </Stack.Navigator>
      </Chat>
    </OverlayProvider>
  )
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationStack />
    </SafeAreaView>
  )
}
