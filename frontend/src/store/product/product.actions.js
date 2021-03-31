import ProductActionTypes from './product.types'
import { apiCallBegan } from '../api'

// Action Creators
const url = '/products'
export const loadProducts = () => dispatch =>
  dispatch(
    apiCallBegan({
      url,
      onStart: ProductActionTypes.PRODUCT_LIST_REQUEST,
      onSuccess: ProductActionTypes.PRODUCT_LIST_RECEIVED,
      onError: ProductActionTypes.PRODUCT_LIST_FAILURE,
    })
  )
