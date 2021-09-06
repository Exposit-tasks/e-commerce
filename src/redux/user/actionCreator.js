import { IS_USER, IS_USER_FOUND, SET_USER, USER_LOGOUT } from './type'
import { DB } from '../../core/axios'

export const createUser = (user, history) => async dispatch => {
  const response = await DB(`/users?email=${user.email}`)
  const { data: searchedUser } = response
  if (searchedUser.length) {
    dispatch({ type: IS_USER })
  } else {
    const { data } = await DB.post('/users', user)
    dispatch({ type: SET_USER, payload: data })
    history.push('/')
  }
}

export const loginUser = (user, history) => async dispatch => {
  const { data } = await DB(
    `/users?email=${user.email}&password=${user.password}`
  )
  if (data.length) {
    dispatch({ type: SET_USER, payload: data[0] })
    history.push('/')
  } else {
    dispatch({ type: IS_USER_FOUND })
  }
}

export const logout = () => async dispatch => {
  dispatch({ type: USER_LOGOUT })
}
