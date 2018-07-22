import { put, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import { actionTypes, loadAuthSuccess, loadAuthError } from "./actions";

es6promise.polyfill();

const auth_url = process.env.BACKEND_URL+"/";
function* loadAuthSaga() {
  try {
    const res = yield fetch(auth_url);
    const data = yield res.json();
    yield put(loadAuthSuccess(data));
  } catch (err) {
    yield put(loadAuthError(err));
  }
}

export default takeLatest(actionTypes.LOAD_AUTH, loadAuthSaga);
