import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { statisticsReducer } from './statisticsReducer';
import { wordsReducer } from './wordsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  words: wordsReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
