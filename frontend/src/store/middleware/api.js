import axios from 'axios'
import * as actions from '../api'

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan().type) return next(action)

  const { url, method, data, onStart, onSuccess, onError } = action.payload

  if (onStart) dispatch({ type: onStart })

  next(action)

  try {
    const response = await axios.request({
      baseURL: 'http://localhost:5000/api',
      url,
      method,
      data,
    })
    // General
    dispatch(actions.apiCallSuccess(response.data))
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
  } catch (error) {
    // General
    dispatch(actions.apiCallFailure(error))
    // Specific
    if (onError)
      dispatch({
        type: onError,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
  }
}
export default api
