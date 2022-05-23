import { KeyboardAvoidingView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import Btn from '../../components/Auth/Btn'
import Input from '../../components/Auth/Input'
import DismissKeyboard from '../../components/DismissKeyboard'
import utils from '../../utils'
import { createAccount } from '../../api'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.View`
  margin-bottom: 15px;
`

export default ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('false')

  const isFormValid = () => {
    if (email === '' || password === '') {
      alert('모든 필드를 작성해주세요')
      return false
    }
    if (!utils.isEmail(email)) {
      alert('존재하지 않는 이메일 입니다. 이메일을 확인해주세요.')
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (!isFormValid()) {
      return
    }
    setLoading(true)

    try {
      const { status } = await createAccount({
        email,
        username: email,
        password,
      })
      if (status === 201) {
        alert('회원가입이 성공적으로 완료되었습니다!')
        navigate('SignIn', { email, password })
        console.log(status)
      }
      /// go to sign in
    } catch (e) {
      alert(e)
      console.warn(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior={'position'}>
          <InputContainer>
            <Input
              keyboardType={'email-address'}
              value={email}
              placeholder="이메일 주소"
              autoCapitalize="none"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="비밀번호"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={'가입하기'} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  )
}
