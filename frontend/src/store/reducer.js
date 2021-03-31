import { combineReducers } from 'redux'
import { productListReducer } from './product/product.reducer'

export default combineReducers({
  productList: productListReducer,
})
