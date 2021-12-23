import { createAction } from '@reduxjs/toolkit';
import { Word, WordsActionTypes } from '../../types/words/words';

export const getWords = createAction(WordsActionTypes.GET_WORDS);

export const getWordsSuccess = createAction(
  WordsActionTypes.GET_WORDS_SUCCESS,
  (data: Word[] | null) => ({
    payload: data,
  }),
);

export const getWordsFail = createAction(
  WordsActionTypes.GET_WORDS_FAIL,
  (errorMessage: string) => ({
    payload: errorMessage,
  }),
);
