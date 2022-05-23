import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import Btn from '../../../components/Auth/Btn'
import Input from '../../../components/Auth/Input'
import utils from '../../../utils'
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.View`
  margin-bottom: 30px;
`

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => alert(`${email}${password}`)
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
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
          placeholder="Password"
          isPassword={true}
          stateFn={setPassword}
        />
      </InputContainer>
      <Btn text={'Sign In'} accent onPress={handleSubmit}></Btn>
    </Container>
  )
}
