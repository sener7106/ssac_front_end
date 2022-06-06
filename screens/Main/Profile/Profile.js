import styled from 'styled-components/native'
import React from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import colors from '../../../colors'
import { Ionicons } from '@expo/vector-icons'
const { width } = Dimensions.get('screen')
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`
const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 100px;
  margin-bottom: 5px;
`
const Button = styled.TouchableOpacity`
  margin: 5px 12px 5px 8px;
  align-items: center;
`
const LogoView = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 50px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.green};
  flex-direction: row;
`
const LogoText = styled.Text`
  font-weight: 600;
  font-size: 35px;
  color: gray;
  margin-right: 15px;
`
const Text = styled.Text`
  font-weight: 600;
  font-size: 18px;
  margin-top: 10px;
  color: black;
`

const MainContaienr = styled.View`
  flex-direction: row;
`

const Profile = () => {
  return (
    <Container>
      <Logo source={require('../../../assets/logo.png')} />
      <LogoView>
        <LogoText>새싹이</LogoText>
        <Ionicons name="pencil-outline" size={25} color="black" />
      </LogoView>
      <MainContaienr>
        <Button>
          <Ionicons name="book-outline" size={35} color="black" />
          <Text>학습 내역</Text>
        </Button>
        <Button>
          <Ionicons name="camera-outline" size={35} color="black" />
          <Text>수정 하기</Text>
        </Button>
        <Button>
          <Ionicons name="calendar-outline" size={35} color="black" />
          <Text>학습 시간</Text>
        </Button>
        <Button>
          <Ionicons name="settings-outline" size={35} color="black" />
          <Text>설정</Text>
        </Button>
      </MainContaienr>
    </Container>
  )
}

export default Profile
