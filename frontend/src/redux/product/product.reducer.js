import ProductActionTypes from './product.types'

const INITIAL_STATE = {
  productList: [],
  productDetails: {},
  loading: false,
  errorMessage: undefined,
}

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: payload,
      }
    case ProductActionTypes.PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      }
    case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: payload,
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

export default productReducer
