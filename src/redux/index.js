import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { productListReducer } from './product-list/reducer'
import { productDetailsReducer } from './single-product/reducer'
import { userReducer } from './user/reducer'
import { cartReducer } from './cart/reducer'
import { orderReducer } from './order/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart', 'order']
}

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer
})

export default persistReducer(persistConfig, rootReducer)
