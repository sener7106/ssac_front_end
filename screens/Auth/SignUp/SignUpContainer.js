import React, { useState } from 'react'
import utils from '../../../utils'
import api from '../../../api'
import SignUpPresenter from './SignUpPresenter'

export default ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [loading, setLoading] = useState(false)

  const isFormValid = () => {
    if (email === '' || password === '' || username === '') {
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
      const { status } = await api.createAccount({
        email,
        username,
        password,
      })
      if (status === 201) {
        alert('회원가입이 성공적으로 완료되었습니다!')
        navigate('SignIn', { email, password })
        console.log(status)
      }
      /// go to sign in
    } catch (e) {
      alert(`The email is taken ${e}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SignUpPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      username={username}
      setUsername={setUsername}
      password2={password2}
      setPassword2={setPassword2}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  )
}
