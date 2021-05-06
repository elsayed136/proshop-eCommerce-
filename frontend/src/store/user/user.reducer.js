import UserActionTypes from './user.types'

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return { ...state, loading: true }
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: payload,
        errorMessage: undefined,
      }
    case UserActionTypes.USER_LOGIN_FAILURE:
      return { ...state, loading: false, errorMessage: payload }
    case UserActionTypes.USER_LOGOUT:
      return {}
    default:
      return state
  }
}
export default userReducer
