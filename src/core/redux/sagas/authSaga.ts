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
import { auth, db } from '../../firebase';
import {
  registrationFail,
  registrationInit,
  registrationSuccess,
} from '../actions/auth/registration';
import { FirebaseError } from 'firebase/app';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { User } from '@firebase/auth';
import { groupCoefficients } from '../../constants/app';
import { UserData } from '../../interfaces/db';
import { DbCollections } from '../../constants/db';

function* CreateUserInDb(user: User) {
  const { uid, email } = user;
  const docRef = doc(db, DbCollections.users, uid);

  const data: UserData = {
    id: uid,
    email: email ? email : '',
    date: Timestamp.fromDate(new Date()),
    score: 0,
    groups: groupCoefficients.map(() => ({
      right: 0,
      wrong: 0,
    })),
  };

  yield call(<never>setDoc, docRef, data);
}

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

    yield call(CreateUserInDb, user);
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
