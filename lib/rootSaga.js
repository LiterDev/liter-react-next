import { all } from 'redux-saga/effects'

import es6promise from "es6-promise";
import "isomorphic-unfetch";

import placeholder from './placeholder/sagas'

function* rootSaga() {
  yield all([placeholder])
}

export default rootSaga
