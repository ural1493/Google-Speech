import { call, put, select, StrictEffect, takeEvery } from 'redux-saga/effects';
import { getWordsByPageAndGroup } from '../../api';
import shuffle from 'lodash.shuffle';
import {
  getWords,
  getWordsFail,
  getWordsSuccess,
  checkWord,
  addWordToAnswered,
  setSkippedWords,
  addToSkipped,
  removeFromSkipped,
  updateUserWords,
} from '../actions/words/words';
import { Word } from '../../interfaces/words';
import { AxiosResponse } from 'axios';
import {
  AMOUNT_OF_WORDS,
  MAX_PAGE,
  groupCoefficients,
} from '../../constants/app';
import { selectGroup, selectWords } from '../selectors/words';
import {
  compareWords,
  getLastWordFromString,
  getRandomPage,
} from '../../helpers/words';
import { db } from '../../firebase';
import {
  doc,
  getDoc,
  setDoc,
  DocumentSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { selectUser } from '../selectors/user';
import { DbCollections } from '../../constants/db';
import { UserData } from '../../interfaces/db';

function* GetWordsWorker(): Generator<
  StrictEffect,
  void,
  AxiosResponse<Word[]> | number
> {
  try {
    const randomPage = getRandomPage(MAX_PAGE);
    const group = (yield select(selectGroup)) as number;
    const response: AxiosResponse<Word[]> = (yield call(
      getWordsByPageAndGroup,
      randomPage,
      group,
    )) as AxiosResponse<Word[]>;
    const words = shuffle(response.data).slice(0, AMOUNT_OF_WORDS);

    yield put(getWordsSuccess(words));
  } catch (error) {
    yield put(getWordsFail((error as Error).message));
  }
}

function* AnsweredWordsWorker(
  action: ReturnType<typeof checkWord>,
): Generator<StrictEffect, void, ReturnType<typeof selectWords>> {
  const { words, answeredWords, skippedWords }: ReturnType<typeof selectWords> =
    (yield select(selectWords)) as ReturnType<typeof selectWords>;
  const wordToCheck = getLastWordFromString(action.payload);
  const foundWord = words?.find(compareWords(wordToCheck));

  if (
    foundWord &&
    !answeredWords.includes(foundWord.id) &&
    !skippedWords.includes(foundWord.id)
  ) {
    yield put(addWordToAnswered(foundWord.id));
  }
}

function* SkippedWordsWorker(
  action: ReturnType<typeof setSkippedWords>,
): Generator {
  const { id, isSkipped } = action.payload;
  if (isSkipped) yield put(addToSkipped(id));
  else yield put(removeFromSkipped(id));
}

function* UpdateUserWordsWorker(): Generator<
  unknown,
  void,
  | ReturnType<typeof selectWords>
  | ReturnType<typeof selectUser>
  | DocumentSnapshot
> {
  const { answeredWords, skippedWords, group }: ReturnType<typeof selectWords> =
    (yield select(selectWords)) as ReturnType<typeof selectWords>;

  const user = (yield select(selectUser)) as ReturnType<typeof selectUser>;
  if (!user) return;

  const right = answeredWords.length;
  const wrong = skippedWords.length;

  const docRef = doc(db, DbCollections.users, user.uid);
  const docSnapshot = (yield call(getDoc, docRef)) as DocumentSnapshot;

  if (docSnapshot.exists()) {
    const data = docSnapshot.data() as UserData;

    const score = data.score;
    const prevRight = data.groups[group].right;
    const prevWrong = data.groups[group].wrong;

    data.groups[group].right = right + prevRight;
    data.groups[group].wrong = wrong + prevWrong;
    data.score = score + right * groupCoefficients[group];
    data.date = Timestamp.fromDate(new Date());

    yield call(setDoc, docRef, data, { merge: true });
  }
}

export function* WordsSaga(): Generator {
  yield takeEvery(getWords, GetWordsWorker);
  yield takeEvery(checkWord, AnsweredWordsWorker);
  yield takeEvery(setSkippedWords, SkippedWordsWorker);
  yield takeEvery(updateUserWords, UpdateUserWordsWorker);
}
