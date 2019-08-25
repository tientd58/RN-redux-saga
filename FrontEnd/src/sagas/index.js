import { all } from 'redux-saga/effects';

import UserSaga from './User';

export default function* rootSaga() {
  yield all([
    UserSaga()
  ])
};