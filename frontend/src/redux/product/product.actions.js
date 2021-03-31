import ProductActionTypes from './product.types'
import axios from 'axios'

const productListRequest = () => ({
  type: ProductActionTypes.PRODUCT_LIST_REQUEST,
})
const productListSuccess = data => ({
  type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
  payload: data,
})
const productListFailure = error => ({
  type: ProductActionTypes.PRODUCT_LIST_FAILURE,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
})
const productDetailsRequest = () => ({
  type: ProductActionTypes.PRODUCT_DETAILS_REQUEST,
})
const productDetailsSuccess = data => ({
  type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
  payload: data,
})
const productDetailsFailure = error => ({
  type: ProductActionTypes.PRODUCT_DETAILS_FAILURE,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
})

export const fetchProductListAsync = () => async dispatch => {
  try {
    dispatch(productListRequest())
    const { data } = await axios.get('/api/products')

    dispatch(productListSuccess(data))
  } catch (error) {
    dispatch(productListFailure(error))
  }
}
export const fetchProductDetailsAsync = id => async dispatch => {
  try {
    dispatch(productDetailsRequest())
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch(productDetailsSuccess(data))
  } catch (error) {
    dispatch(productDetailsFailure(error))
  }
}
