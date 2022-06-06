import React from 'react'
import { Dimensions, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Explain = () => {
  const navigation = useNavigation()
  const [sliderState, setSliderState] = useState({ currentPage: 0 })
  const { width, height } = Dimensions.get('window')

  const setSliderPage = (event) => {
    const { currentPage } = sliderState
    const { x } = event.nativeEvent.contentOffset
    const indexOfNextScreen = Math.floor(x / width)
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      })
    }
  }
  const ImageSource = {
    0: require('../assets/main_chat.png'),
    1: require('../assets/conversation.png'),
    2: require('../assets/youtube.png'),
    3: require('../assets/emotion.png'),
    4: require('../assets/resize.png'),
    5: require('../assets/logo.png'),
  }
  const { currentPage: pageIndex } = sliderState
  const Page = ({ header, text, text2, image }) => (
    <View style={{ width, height }}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>{header}</Text>
        <Image source={ImageSource[image]} style={styles.imageStyle} />
        <Text style={styles.paragraph}>{text}</Text>
        <Text style={styles.paragraph}>{text2}</Text>
      </View>
    </View>
  )

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event)
          }}
        >
          <Page
            header={'『 사용 방법 』 '}
            text={'말을 할 땐 버튼을 눌러주세요!'}
            text2={'Press the button while you speak'}
            image={0}
          />
          <Page
            header={' 『 채팅하기 』 '}
            text={'자유롭게 말을 걸어주세요!'}
            text2={'챗봇이 한국어와 영어로 동시에 대답해줘요!'}
            image={1}
          />
          <Page
            header={'『 동영상 학습 』'}
            text={' 영어 학습에 도움이 되는 '}
            text2={'유튜브 영상을 제공합니다!'}
            image={2}
          />
          <Page
            header={'『 감정 분석 』'}
            text={'문장 요약을 통해서 내 감정을 분석해줘요!'}
            text2={''}
            image={3}
          />
          <Page
            header={'『 내 프로필 』'}
            text={'프로필을 수정할 수 있어요!'}
            text2={''}
            image={4}
          />

          <TouchableOpacity onPress={() => navigation.navigate('tabs')}>
            <Page
              header={'『 화면을 눌러 시작하기 』'}
              image={5}
              text={'자 그럼 대화하러 떠나볼까요~?'}
              onPress={() => navigation.navigate('tabs')}
            />
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: '80%',
    width: '70%',
    marginBottom: 10,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 35,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 17,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'gray',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#0898A0',
    marginLeft: 10,
  },
})

export default Explain
