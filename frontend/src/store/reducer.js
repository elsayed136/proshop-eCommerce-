import { combineReducers } from 'redux'
import {
  productDetailsReducer,
  productListReducer,
} from './product/product.reducer'

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})
