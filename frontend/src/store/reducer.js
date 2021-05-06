import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer'
import {
  productDetailsReducer,
  productListReducer,
} from './product/product.reducer'

import userReducer from './user/user.reducer'

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
})
