import UserActionTypes from './user.types'
import { apiCallBegan } from '../api'

const url = '/users/login'

export const login = (email, password) => dispatch =>
  dispatch(
    apiCallBegan({
      url,
      onStart: UserActionTypes.USER_LOGIN_REQUEST,
      onSuccess: UserActionTypes.USER_LOGIN_SUCCESS,
      onError: UserActionTypes.USER_LOGIN_FAILURE,
      method: 'post',
      data: { email, password },
    })
  )
