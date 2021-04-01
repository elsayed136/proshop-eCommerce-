import CartActionTypes from './cart.types'

import { addItemToCart, removeItemFromCart } from './cart.utils'

const initialState = {
  cartItems: [],
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.CART_ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) }
    case CartActionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      }
    case CartActionTypes.CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem._id !== payload._id
        ),
      }

    default:
      return state
  }
}

export default cartReducer
