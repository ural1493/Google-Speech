import { loginFail, loginStart, loginSuccess } from '../../actions/auth/login';

export enum LoginActionTypes {
  LOGIN_INIT = 'LOGIN_INIT',
  LOGIN_START = 'LOGIN_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
}

export type UserActionLoginTypes = ReturnType<
  typeof loginStart | typeof loginSuccess | typeof loginFail
>;

export type LoginValues = {
  email: string;
  password: string;
};
