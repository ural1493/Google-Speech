import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { wordsReducer } from './wordsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  words: wordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
