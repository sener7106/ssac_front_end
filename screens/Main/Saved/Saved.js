import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import Context from '../../../components/Video/Context'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('screen')
const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const SummaryView = styled.ScrollView`
  flex: 1;
  width: ${width / 1.05};
  height: ${height / 1.05};
  margin-top: 20px;
  padding: 7px;
  border-radius: 10px;
  background-color: white;
`

const Saved = () => {
  const navigation = useNavigation()
  const onPress = () => navigation.navigate('Screen')
  return (
    <Container>
      <SummaryView>
        <Context
          onPress={onPress}
          title="영어로 듣는 뽀로로"
          text="뽀로로와 함께 영어공부해요!"
          source={require('../../../assets/a2.png')}
        />
        <Context
          onPress={onPress}
          title="영어로 듣는 코코몽"
          text="코코몽과 함께 영어공부해요!"
          source={require('../../../assets/a4.png')}
        />
        <Context
          onPress={onPress}
          title="영어로 배우는 겨울왕국"
          text="겨울왕국의 노래를 함께 불러요!"
          source={require('../../../assets/a1.png')}
        />
      </SummaryView>
    </Container>
  )
}

export default Saved
