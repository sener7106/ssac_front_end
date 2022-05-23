// 대화하기

import styled from 'styled-components/native'

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

const Text = styled.Text``
export default () => (
  <Container>
    <Logo source={require('../../assets/logo.png')} />
    <Text>말을 할 땐 버튼을 눌러주세요!</Text>
    <Text>Press the button while you speak</Text>
  </Container>
)
