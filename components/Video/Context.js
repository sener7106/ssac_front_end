import styled from 'styled-components/native'
import { Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('screen')

const VideoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: row;
  width: ${width / 1.1};
  height: 120px;
  margin-top: 15px;
  border: 2px solid gray;
  border-radius: 10px;
  padding-bottom: 15px;
`
const Logo = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 40px;
  margin-left: 10px;
  margin-right: 12px;
`

const TitleView = styled.TouchableOpacity`
  width: 70%;
`
const ResultText = styled.Text`
  font-size: 16;
  font-weight: 400;
  color: black;
  margin-right: 17px;
  margin-bottom: 10px;
`
const Title = styled.Text`
  font-size: 20;
  font-weight: 700;
  margin-bottom: 20px;
  color: black;
`

const Context = ({ onPress, title, text, source }) => (
  <VideoContainer>
    <Logo source={source} />
    <TitleView onPress={onPress}>
      <Title>{title}</Title>
      <ResultText>{text}</ResultText>
    </TitleView>
  </VideoContainer>
)

export default Context
