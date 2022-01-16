import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import { takeEvery, StrictEffect, call, put } from 'redux-saga/effects';
import { DbCollections } from '../../constants/db';
import { db } from '../../firebase';
import { UserData } from '../../interfaces/db';
import {
  getUsersStatistics,
  getUsersStatisticsFail,
  getUsersStatisticsSuccess,
} from '../actions/statistics/statistics';

function* StatisticsWorker(): Generator<StrictEffect, void, QuerySnapshot> {
  try {
    const users: UserData[] = [];
    const usersCollecitonRef = collection(db, DbCollections.users);

    const usersSnapshot: QuerySnapshot = (yield call(
      getDocs,
      usersCollecitonRef,
    )) as QuerySnapshot;

    usersSnapshot.forEach((doc: QueryDocumentSnapshot) => {
      if (doc.exists()) {
        users.push(doc.data() as UserData);
      }
    });

    yield put(getUsersStatisticsSuccess(users));
  } catch (error) {
    yield put(getUsersStatisticsFail((error as Error).message));
  }
}

export function* StatisticsSaga(): Generator {
  yield takeEvery(getUsersStatistics, StatisticsWorker);
}
