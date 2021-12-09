import { takeEvery, put, call } from 'redux-saga/effects';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  loginInit,
  loginStart,
  loginSuccess,
  loginFail,
} from '../actions/auth/login';
import { auth } from '../../firebase';
import {
  registrationFail,
  registrationInit,
  registrationSuccess,
} from '../actions/auth/registration';

function* LoginWorker(action: ReturnType<typeof loginInit>) {
  try {
    const { email, password } = action.payload;
    yield put(loginStart());

    const { user } = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password,
    );

    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFail((error as Error).message));
  }
}

function* RegistrationWorker(action: ReturnType<typeof registrationInit>) {
  try {
    const { email, password } = action.payload;
    yield put(loginStart());

    const { user } = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password,
    );

    yield put(registrationSuccess(user));
  } catch (error) {
    yield put(registrationFail((error as Error).message));
  }
}

export function* AuthSaga(): Generator {
  yield takeEvery(loginInit, LoginWorker);
  yield takeEvery(registrationInit, RegistrationWorker);
}
