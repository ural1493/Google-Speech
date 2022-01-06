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
import { FirebaseError } from 'firebase/app';

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
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
      yield put(loginFail(error.code));
    }
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
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
      yield put(registrationFail(error.code));
    }
  }
}

export function* AuthSaga(): Generator {
  yield takeEvery(loginInit, LoginWorker);
  yield takeEvery(registrationInit, RegistrationWorker);
}
