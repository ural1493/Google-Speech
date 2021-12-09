import { User } from '@firebase/auth';
import { createAction } from '@reduxjs/toolkit';
import { UserActionTypes } from '../../types/auth/user';

export const setUser = createAction(
  UserActionTypes.SET_USER,
  (user: User | null) => ({
    payload: user,
  }),
);
