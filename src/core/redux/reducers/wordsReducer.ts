import { WordAction, WordsActionTypes } from '../types/words/words';
import { Word } from '../../interfaces/words';

export interface WordsState {
  words: Word[] | null;
  isLoading: boolean;
  error: string | null;
  answeredWords: string[];
  skippedWords: string[];
  group: number;
}

const defaultState: WordsState = {
  words: null,
  isLoading: false,
  error: null,
  answeredWords: [],
  skippedWords: [],
  group: 0,
};

export type WordsActions = WordAction;

export const wordsReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = defaultState,
  action: WordsActions,
): WordsState => {
  switch (action.type) {
    case WordsActionTypes.GET_WORDS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case WordsActionTypes.GET_WORDS_SUCCESS:
      return {
        ...state,
        words: action.payload,
        isLoading: false,
        error: null,
      };
    case WordsActionTypes.GET_WORDS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case WordsActionTypes.ADD_WORD_TO_ANSWERED:
      return {
        ...state,
        answeredWords: [...state.answeredWords, action.payload],
      };
    case WordsActionTypes.ADD_TO_SKIPPED:
      return {
        ...state,
        skippedWords: [...state.skippedWords, action.payload],
      };
    case WordsActionTypes.REMOVE_FROM_SKIPPED:
      return {
        ...state,
        skippedWords: state.skippedWords.filter((id) => id !== action.payload),
      };
    case WordsActionTypes.SET_GROUP:
      return {
        ...state,
        group: action.payload,
      };
    case WordsActionTypes.RESET_WORDS:
      return {
        ...state,
        words: null,
        answeredWords: [],
        skippedWords: [],
      };
    default:
      return state;
  }
};
