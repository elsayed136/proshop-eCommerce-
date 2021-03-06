import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducer from './reducer'
import thunk from 'redux-thunk'
import quantityChecker from './middleware/quantityChecker'
import api from './middleware/api'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'],
}
const persistedReducer = persistReducer(persistConfig, reducer)

const middlewares = [thunk, api, quantityChecker]

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
const persistor = persistStore(store)

export { store, persistor }
