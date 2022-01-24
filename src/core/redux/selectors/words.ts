import { RootState } from '../reducers';
import { WordsState } from '../reducers/wordsReducer';

export const selectWords = (state: RootState): WordsState => state.words;

export const selectGroup = (state: RootState): number => state.words.group;
