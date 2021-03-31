import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import thunk from 'redux-thunk'
import api from './middleware/api'

const middlewares = [thunk, api]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
