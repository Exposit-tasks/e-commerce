import { USER_LOGOUT, SET_USER, IS_USER, IS_USER_FOUND } from './type'

const INITIAL_STATE = {
  user: null,
  isUserExist: false,
  isUserFound: true
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return { ...state, user: null, isUserFound: true, isUserExist: false }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isUserFound: true,
        isUserExist: false
      }
    case IS_USER:
      return { ...state, isUserExist: true }
    case IS_USER_FOUND:
      return { ...state, isUserFound: false }
    default:
      return state
  }
}
