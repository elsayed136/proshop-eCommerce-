import CartActionTypes from './cart.types'

export const addItem = item => ({
  type: CartActionTypes.CART_ADD_ITEM,
  payload: item,
})

export const removeItem = item => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  payload: item,
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.CART_CLEAR_ITEM,
  payload: item,
})
