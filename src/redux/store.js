import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from './index'

const middleware = [thunk]

process.env.NODE_ENV === 'development' && middleware.push(logger)

const store = createStore(rootReducer, applyMiddleware(...middleware))
const persistor = persistStore(store)

export { store, persistor }
