import { PRODUCT_LIST_REQUEST } from './type'
import { DB } from '../../core/axios'

const getProducts = payload => {
  return {
    type: PRODUCT_LIST_REQUEST,
    payload
  }
}

export const listProducts = () => dispatch => {
  DB('/products').then(payload => dispatch(getProducts(payload.data)))
}
