import { call, put, select, takeEvery } from 'redux-saga/effects';
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
import { AMOUNT_OF_WORDS } from '../../constants/app';
import { selectWords } from '../selectors/words';
import { getRandomPage } from '../../helpers/words';

function* GetWordsWorker(
  action: ReturnType<typeof getWords>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Generator<unknown, void, any> {
  try {
    const randomPage = getRandomPage();
    const response: AxiosResponse<Word[]> = yield call(
      getWordsByPageAndGroup,
      randomPage,
      action.payload,
    );
    const words = shuffle(response.data).slice(0, AMOUNT_OF_WORDS);

    yield put(getWordsSuccess(words));
  } catch (error) {
    yield put(getWordsFail((error as Error).message));
  }
}

function* AnsweredWordsWorker(
  action: ReturnType<typeof checkWord>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Generator<unknown, void, any> {
  const { words, answeredWords, skippedWords }: ReturnType<typeof selectWords> =
    yield select(selectWords);
  const wordToCheck = action.payload;
  const foundWord = words?.find(
    (word) => word.word.toLowerCase() === wordToCheck.toLowerCase(),
  );

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
