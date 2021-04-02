import CartActionTypes from './cart.types'
import { apiCallBegan } from '../api'

const url = '/products'

export const addItem = id => dispatch =>
  dispatch(
    apiCallBegan({
      url: `${url}/${id}`,
      onSuccess: CartActionTypes.CART_ADD_ITEM,
    })
  )

export const removeItem = item => ({
  type: CartActionTypes.CART_REMOVE_ITEM,
  payload: item,
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.CART_CLEAR_ITEM,
  payload: item,
})
