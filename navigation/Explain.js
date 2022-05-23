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
    0: require('../assets/logo.png'),
    1: require('../assets/adaptive-icon.png'),
    2: require('../assets/splash.png'),
    3: require('../assets/favicon.png'),
    4: require('../assets/logo.png'),
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
            image={0}
          />
          <Page
            header={'『 동영상 학습 』'}
            text={' 영어 학습에 도움이 되는 '}
            text2={'유튜브 영상을 제공합니다!'}
            image={0}
          />
          <Page
            header={'『 학습 그래프 』'}
            text={'학습 그래프를 통해서 내 감정을 분석해줘요!'}
            text2={''}
            image={0}
          />

          <TouchableOpacity onPress={() => navigation.navigate('tabs')}>
            <Page
              header={'『 화면을 눌러 시작하기 』'}
              image={0}
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
    height: '70%',
    width: '100%',
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
