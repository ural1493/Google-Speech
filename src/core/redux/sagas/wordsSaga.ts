import { call, put, takeEvery } from 'redux-saga/effects';
import { getWordsByPageAndGroup } from '../../api';
import {
  getWords,
  getWordsFail,
  getWordsSuccess,
} from '../actions/words/words';
import { Word } from '../types/words/words';
import { AxiosResponse } from 'axios';

export function* WordsWorker(): Generator<
  unknown,
  void,
  AxiosResponse<Word[]>
> {
  try {
    const response = yield call(getWordsByPageAndGroup);

    yield put(getWordsSuccess(response.data));
  } catch (error) {
    yield put(getWordsFail((error as Error).message));
  }
}

export function* WordsSaga(): Generator {
  yield takeEvery(getWords, WordsWorker);
}
