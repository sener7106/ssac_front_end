import { createSlice } from '@reduxjs/toolkit'
import api from '../api'
import { setFavs, setFav } from './roomsSlice'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true
      state.token = action.payload.token
      state.id = action.payload.id
    },
    logOut(state, action) {
      state.isLoggedIn = false
      state.token = null
    },
  },
})

export const { logIn, logOut } = userSlice.actions
export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: { id, token },
    } = await api.login(form)

    dispatch(logIn({ token, id }))
  } catch (e) {
    alert('Wrong user/password')
  }
}
export default userSlice.reducer
