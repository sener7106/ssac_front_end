import styled from 'styled-components/native'
import React from 'react'
import { TouchableOpacity, Dimensions } from 'react-native'
import colors from '../../../colors'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('screen')
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 15px;
`
const Button = styled.View`
  margin: 20px;
  border: 1px solid ${(props) => (props.accent ? 'transparent' : colors.green)};
  border-radius: 30px;
  padding: 12.5px 0px;
  align-items: center;
  width: ${width / 3}px;
  background-color: ${colors.green};
`
const Text = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color: ${(props) => (props.accent ? 'white' : colors.black)};
`

export default () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Logo source={require('../../../assets/logo.png')} />
      <Text>아직 대화를 시작하지 않았어요. 챗봇에게 인사해보세요!</Text>
      <Text>No chat history. Say Hi to Chatbot!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Room')}>
        <Button>
          <Text style={{ color: 'white' }}>안녕! Hi!</Text>
        </Button>
      </TouchableOpacity>
    </Container>
  )
}
