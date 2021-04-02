import CartActionTypes from '../cart/cart.types'
import { toast } from 'react-toastify'
const errorMessage = 'Max Quantity No More Abilable In Stock'
const quantityChecker = ({ dispatch, getState }) => next => action => {
  if (action.type !== CartActionTypes.CART_ADD_ITEM) return next(action)

  const cartItems = getState().cart.cartItems

  const existing = cartItems.find(
    cartItem => cartItem._id === action.payload._id
  )
  if (existing === undefined) return next(action)
  if (existing.quantity >= existing.countInStock) {
    return toast(errorMessage)
  }
  // dispatch({
  //   type: CartActionTypes.CART_ADD_ITEM,
  //   payload: existing,
  // })
  next(action)
}

export default quantityChecker
