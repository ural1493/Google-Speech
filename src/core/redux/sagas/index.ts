import { all } from 'redux-saga/effects';
import { AuthSaga } from './authSaga';

export function* rootSaga(): Generator {
  yield all([AuthSaga()]);
}
