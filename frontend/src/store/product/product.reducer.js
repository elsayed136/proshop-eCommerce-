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
