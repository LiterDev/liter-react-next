export const actionTypes = {
  LOAD_AUTH: 'LOAD_AUTH',
  LOAD_AUTH_SUCCESS: 'LOAD_AUTH_SUCCESS',
  LOAD_AUTH_ERROR: 'LOAD_AUTH_ERROR'
}

const apiurl = process.env.BACKEND_URL;
export function loadAuth() {
  return { type: actionTypes.LOAD_AUTH }
}

export function loadAuthSuccess(data) {
  return {
    type: actionTypes.LOAD_AUTH_SUCCESS,
    data
  }
}

export function loadAuthError(error) {
  return {
    type: actionTypes.LOAD_AUTH_ERROR,
    error
  }
}
