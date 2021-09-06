import { ORDER_CREATE, ORDER_CREATE_RESET, ORDER_USER_LIST } from './type'

const initialState = {
  order: []
}

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER_CREATE:
      return { ...state, order: payload }
    case ORDER_USER_LIST:
      return { ...state, order: payload }
    case ORDER_CREATE_RESET:
      return {}
    default:
      return state
  }
}
