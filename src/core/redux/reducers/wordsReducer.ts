import { Word, WordAction, WordsActionTypes } from '../types/words/words';

interface WordsState {
  data: Word[] | null;
  isLoading: boolean;
  error: string | null;
}

const defaultState: WordsState = {
  data: null,
  isLoading: false,
  error: null,
};

export type WordsActions = WordAction;

export const wordsReducer = (
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
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case WordsActionTypes.GET_WORDS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
