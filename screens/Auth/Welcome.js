import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { BlurView } from 'expo-blur'
import Btn from '../../components/Auth/Btn'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`

const Logo = styled.Image`
  width: 350px;
  height: 350px;
  margin-top: 80px;
`
const BtnContainer = styled.View`
  margin-top: 30px;
`

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate('SignUp')
  const goToSignIn = () => navigation.navigate('SignIn')
  return (
    <Container>
      <BlurView
        intensity={30}
        tint="light"
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo source={require('../../assets/logo.png')} />
        <BtnContainer>
          <Btn onPress={goToSignUp} text={'가입하기'} accent={true} />
          <Btn onPress={goToSignIn} text={'로그인'} />
        </BtnContainer>
      </BlurView>
      <Image
        resizeMethod="resize"
        source={require('../../assets/loginBg.jpeg')}
      />
      <StatusBar barStyle="light-content" />
    </Container>
  )
}
