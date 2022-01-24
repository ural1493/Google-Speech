import { createAction } from '@reduxjs/toolkit';
import { WordsActionTypes } from '../../types/words/words';
import { Word } from '../../../interfaces/words';

export const getWords = createAction(WordsActionTypes.GET_WORDS);

export const getWordsSuccess = createAction(
  WordsActionTypes.GET_WORDS_SUCCESS,
  (words: Word[] | null) => ({
    payload: words,
  }),
);

export const getWordsFail = createAction(
  WordsActionTypes.GET_WORDS_FAIL,
  (errorMessage: string) => ({
    payload: errorMessage,
  }),
);

export const checkWord = createAction(
  WordsActionTypes.CHECK_WORD,
  (word: string) => ({ payload: word }),
);

export const addWordToAnswered = createAction(
  WordsActionTypes.ADD_WORD_TO_ANSWERED,
  (id: string) => ({ payload: id }),
);

export const setSkippedWords = createAction(
  WordsActionTypes.SET_SKIPPED_WORDS,
  (id: string, isSkipped: boolean) => ({
    payload: { id, isSkipped },
  }),
);

export const addToSkipped = createAction(
  WordsActionTypes.ADD_TO_SKIPPED,
  (id: string) => ({
    payload: id,
  }),
);

export const removeFromSkipped = createAction(
  WordsActionTypes.REMOVE_FROM_SKIPPED,
  (id: string) => ({
    payload: id,
  }),
);

export const setGroup = createAction(
  WordsActionTypes.SET_GROUP,
  (group: number) => ({
    payload: group,
  }),
);

export const resetWords = createAction(WordsActionTypes.RESET_WORDS);

export const updateUserWords = createAction(WordsActionTypes.UPDATE_USER_WORDS);
