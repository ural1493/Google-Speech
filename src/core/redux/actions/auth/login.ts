import { User } from '@firebase/auth';
import { createAction } from '@reduxjs/toolkit';
import { LoginActionTypes } from '../../types/auth/login';

export const loginInit = createAction(
  LoginActionTypes.LOGIN_INIT,
  (values: { email: string; password: string }) => ({
    payload: values,
  }),
);

export const loginStart = createAction(LoginActionTypes.LOGIN_START);

export const loginSuccess = createAction(
  LoginActionTypes.LOGIN_SUCCESS,
  (user: User | null) => ({
    payload: user,
  }),
);

export const loginFail = createAction(
  LoginActionTypes.LOGIN_FAIL,
  (error: string) => ({
    payload: error,
  }),
);
