import React from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'
import Btn from '../../../components/Auth/Btn'
import Input from '../../../components/Auth/Input'
import DismissKeyboard from '../../../components/DismissKeyboard'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.View`
  margin-bottom: 15px;
`

export default ({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  handleSubmit,
  setPassword2,
  password2,
  username,
  setUsername,
}) => (
  <DismissKeyboard>
    <Container>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior={'position'}>
        <InputContainer>
          <Input
            value={username}
            placeholder="닉네임"
            autoCapitalize="none"
            stateFn={setUsername}
          />
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
          <Input
            value={password2}
            placeholder="비밀번호 재확인"
            isPassword={true}
            stateFn={setPassword2}
          />
        </InputContainer>
        <Btn
          loading={loading}
          text={'가입하기'}
          accent
          onPress={handleSubmit}
        ></Btn>
      </KeyboardAvoidingView>
    </Container>
  </DismissKeyboard>
)
