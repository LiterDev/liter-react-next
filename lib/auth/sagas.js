import { put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, loadAuthSuccess, loadAuthError } from './actions'

es6promise.polyfill()

function* loadAuthSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadAuthSuccess(data))
  } catch (err) {
    yield put(loadAuthError(err))
  }
}

export default takeLatest(actionTypes.LOAD_AUTH, loadAuthSaga)
