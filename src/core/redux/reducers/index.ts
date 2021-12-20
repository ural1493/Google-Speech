import { combineReducers } from 'redux';
import { authReducer } from './authReduser';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
