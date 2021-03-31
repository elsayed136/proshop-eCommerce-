import ProductActionTypes from './product.types'
import axios from 'axios'

const fetchProductsRequest = () => ({
  type: ProductActionTypes.PRODUCT_LIST_REQUEST,
})
const fetchProductsSuccess = data => ({
  type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
  payload: data,
})
const fetchProductsFailure = error => ({
  type: ProductActionTypes.PRODUCT_LIST_FAILURE,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
})
export const fetchProductsAsync = () => async dispatch => {
  try {
    dispatch(fetchProductsRequest())
    const { data } = await axios.get('/api/products')

    dispatch(fetchProductsSuccess(data))
  } catch (error) {
    dispatch(fetchProductsFailure(error))
  }
}
