import {
  getWords,
  getWordsSuccess,
  getWordsFail,
} from '../../actions/words/words';

export enum WordsActionTypes {
  GET_WORDS = 'GET_WORDS',
  GET_WORDS_SUCCESS = 'GET_WORDS_SUCCESS',
  GET_WORDS_FAIL = 'GET_WORDS_FAIL',
}

export type WordAction = ReturnType<
  typeof getWords | typeof getWordsSuccess | typeof getWordsFail
>;

export interface Word {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
  wordsPerExampleSentence: number;
}
