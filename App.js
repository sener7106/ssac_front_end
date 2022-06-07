import React, { useState } from 'react'
import AppLoading from 'expo-app-loading'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { Image } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Gate from './components/Gate'
import store, { persistor } from './redux/store'
import 'react-native-gesture-handler'

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font))

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const handleFinish = () => setIsReady(true)
  const loadAssets = async () => {
    const images = [
      require('./assets/logo.png'),
      require('./assets/loginBg.jpeg'),
      require('./assets/a1.png'),
      require('./assets/a2.png'),
      require('./assets/a4.png'),
      require('./assets/main_chat.png'),
      require('./assets/conversation.png'),
      require('./assets/youtube.png'),
      require('./assets/emotion.png'),
      require('./assets/resize.png'),

      'http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png',
    ]
    const fonts = [Ionicons.font, SimpleLineIcons.font]
    const imagePromises = cacheImages(images)
    const fontPromises = cacheFonts(fonts)
    return Promise.all([...fontPromises, ...imagePromises])
  }
  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  )
}
