import axios from 'axios'

// api 통신용 함수 만들기
// make easy request withot URL copypasting.
// make post get delete put req.
// send jwt automatically

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    'Content-Type': 'application/json',
  }
  const baseUrl =
    'http://83c5-2001-2d8-6b5f-b25e-cd1d-7b4f-d148-78f9.ngrok.io/api/v1'
  const fullUrl = `${baseUrl}${path}`
  if (method === 'get' || method === 'delete') {
    return axios[method](baseUrl, { headers })
  } else {
    //post의 경우에만 data를 주고받음
    return axios[method](fullUrl, data, { headers })
  }
}

export default {
  createAccount: (form) => callApi('post', '/users/', form),
  login: (form) => callApi('post', '/users/login/', form),
  rooms: (page) => callApi('get', `/rooms/?page=${page}`),
  // 메세지전송
  sendMessage: (message) => callApi('post', '/chat/messages', message),
}
