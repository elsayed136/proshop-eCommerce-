import ProductActionTypes from './product.types'

export const productListReducer = (
  state = { products: [] },
  { type, payload }
) => {
  switch (type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductActionTypes.PRODUCT_LIST_RECEIVED:
      return {
        ...state,
        products: payload,
        loading: false,
        errorMessage: undefined,
      }
    case ProductActionTypes.PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}
export const productDetailsReducer = (
  state = { product: {} },
  { type, payload }
) => {
  switch (type) {
    case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductActionTypes.PRODUCT_DETAILS_RECEIVED:
      return {
        ...state,
        product: payload,
        loading: false,
        errorMessage: undefined,
      }
    case ProductActionTypes.PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}
