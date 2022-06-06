import * as React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Audio } from 'expo-av'

export default function Room() {
  const [sound, setSound] = React.useState()

  async function playSound() {
    console.log('Loading Sound')
    const audioclip = []
    const { sound } = await Audio.Sound.createAsync({
      uri: 'http://aichatapp.s3.amazonaws.com/test/mix-1.wav',
    })
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <View>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  )
}
