import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_ORDER_DATA } from './type'
import { DB } from '../../core/axios'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await DB(`/products/${productId}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      title: data.title,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data.id,
      qty
    }
  })
}

export const removeFromCart = productId => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId
  })
}

export const saveOrderData = data => dispatch => {
  dispatch({
    type: CART_SAVE_ORDER_DATA,
    payload: data
  })
}
