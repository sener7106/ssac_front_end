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
  //const baseUrl = 'http://6884-112-172-128-1.ngrok.io/api/v1'

  const baseUrl = 'http://44.205.74.198:8000/api/v1'
  const fullUrl = `${baseUrl}${path}`
  if (method === 'get' || method === 'delete') {
    return axios[method](fullUrl, { headers })
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
  sendMessage: (message) => callApi('post', '/chats/message/', message),
  getMessage: () => callApi('get', `/chats/message/2/1`),
  loadSummary: () => callApi('get', `/summary/summary/`),
}
