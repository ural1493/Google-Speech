import { setUser } from '../../actions/auth/user';
import { User } from '@firebase/auth';
import { RootState } from '../../reducers';

export enum UserActionTypes {
  SET_USER = 'SET_USER',
}

export type UserAction = ReturnType<typeof setUser>;

export type SelectUser = (state: RootState) => User | null;
export type SelectUserError = (state: RootState) => string | null;
