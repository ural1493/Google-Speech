import { all } from 'redux-saga/effects';
import { AuthSaga } from './authSaga';
import { WordsSaga } from './wordsSaga';

export function* rootSaga(): Generator {
  yield all([AuthSaga(), WordsSaga()]);
}
