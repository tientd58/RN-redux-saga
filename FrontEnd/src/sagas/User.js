import { call, put, spawn, takeEvery, all } from 'redux-saga/effects';

import {
  login as loginService
} from '../services/User';
import { USER } from '../actions/types';
import { loginSuccess, loginFailure } from '../actions/User';

function* handleLogin({payload}) {
  try {
    const {params} = payload;
    const res = yield call(loginService, params);
    yield put(loginSuccess(res));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* watchUserLogin() {
  yield takeEvery(USER.LOGIN_REQUEST, handleLogin)
};

export default function* rootSaga() {
  yield all([
    spawn(watchUserLogin)
  ])
}