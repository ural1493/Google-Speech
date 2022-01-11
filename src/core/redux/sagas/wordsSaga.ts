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
} from '../actions/words/words';
import { Word } from '../../interfaces/words';
import { AxiosResponse } from 'axios';
import { AMOUNT_OF_WORDS, MAX_PAGE } from '../../constants/app';
import { selectGroup, selectWords } from '../selectors/words';
import { compareWords, getLastWord, getRandomPage } from '../../helpers/words';

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
  const wordToCheck = getLastWord(action.payload);
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

export function* WordsSaga(): Generator {
  yield takeEvery(getWords, GetWordsWorker);
  yield takeEvery(checkWord, AnsweredWordsWorker);
  yield takeEvery(setSkippedWords, SkippedWordsWorker);
}
