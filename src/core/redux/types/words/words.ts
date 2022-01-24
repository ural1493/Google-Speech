import {
  getWords,
  getWordsSuccess,
  getWordsFail,
  checkWord,
  addWordToAnswered,
  setSkippedWords,
  addToSkipped,
  removeFromSkipped,
  setGroup,
  resetWords,
  updateUserWords,
} from '../../actions/words/words';

export enum WordsActionTypes {
  GET_WORDS = 'GET_WORDS',
  GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS',
  GET_WORDS_FAIL = 'GET_WORDS_FAIL',
  CHECK_WORD = 'CHECK_WORD',
  ADD_WORD_TO_ANSWERED = 'ADD_WORD_TO_ANSWERED',
  SET_SKIPPED_WORDS = 'SET_SKIPPED_WORDS',
  ADD_TO_SKIPPED = 'ADD_TO_SKIPPED',
  REMOVE_FROM_SKIPPED = 'REMOVE_FROM_SKIPPED',
  SET_GROUP = 'SET_GROUP',
  RESET_WORDS = 'RESET_WORDS',
  UPDATE_USER_WORDS = 'UPDATE_USER_WORDS',
}

export type WordAction = ReturnType<
  | typeof getWords
  | typeof getWordsSuccess
  | typeof getWordsFail
  | typeof checkWord
  | typeof addWordToAnswered
  | typeof setSkippedWords
  | typeof addToSkipped
  | typeof removeFromSkipped
  | typeof setGroup
  | typeof resetWords
  | typeof updateUserWords
>;
