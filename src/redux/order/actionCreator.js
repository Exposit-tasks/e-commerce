import { ORDER_CREATE, ORDER_USER_LIST } from './type'
import { CART_EMPTY } from '../cart/type'
import { DB } from '../../core/axios'

export const createOrder = order => async (dispatch, getState) => {
  const { data } = await DB.post(`/orders/`, order)
  dispatch({ type: ORDER_CREATE, payload: data.order })
  dispatch({ type: CART_EMPTY, payload: data.order })
}

export const userOrderList = userId => async dispatch => {
  const { data } = await DB(`/orders?userId=${userId}`)
  dispatch({ type: ORDER_USER_LIST, payload: data })
}
