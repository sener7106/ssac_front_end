import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default () => {
  const chatClient = StreamChat.getInstance('jpspdxvv29ss')

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
    </GestureHandlerRootView>
  )
}
