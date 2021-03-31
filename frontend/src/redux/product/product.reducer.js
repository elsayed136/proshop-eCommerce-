import ProductActionTypes from './product.types'

const INITIAL_STATE = {
  products: [],
  isFetching: false,
  errorMessage: undefined,
}

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: payload,
      }
    case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}

export default productReducer
