const API_CALL_BEGAN = 'API_CALL_BEGAN'
const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
const API_CALL_FAILURE = 'API_CALL_FAILURE'

export const apiCallBegan = payload => ({
  type: API_CALL_BEGAN,
  payload,
})
export const apiCallSuccess = payload => ({
  type: API_CALL_SUCCESS,
  payload,
})
export const apiCallFailure = payload => ({
  type: API_CALL_FAILURE,
  payload,
})
