import { call, put, takeEvery } from 'redux-saga/effects';
import { getWordsByPageAndGroup } from '../../api';
import _ from 'lodash';
import {
  getWords,
  getWordsFail,
  getWordsSuccess,
} from '../actions/words/words';
import { Word } from '../types/words/words';
import { AxiosResponse } from 'axios';
import { AMOUNT_OF_WORDS, MAX_PAGE } from '../../constants/app';

export function* WordsWorker(): Generator<
  unknown,
  void,
  AxiosResponse<Word[]>
> {
  try {
    const randomPage = Math.floor(Math.random() * MAX_PAGE);
    const response = yield call(getWordsByPageAndGroup, randomPage);
    const data = _.shuffle(response.data);
    data.length = AMOUNT_OF_WORDS;

    yield put(getWordsSuccess(data));
  } catch (error) {
    yield put(getWordsFail((error as Error).message));
  }
}

export function* WordsSaga(): Generator {
  yield takeEvery(getWords, WordsWorker);
}
