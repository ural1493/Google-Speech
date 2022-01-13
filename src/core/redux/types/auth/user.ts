import { setUser } from '../../actions/auth/user';

export enum UserActionTypes {
  SET_USER = 'SET_USER',
}

export type UserAction = ReturnType<typeof setUser>;
