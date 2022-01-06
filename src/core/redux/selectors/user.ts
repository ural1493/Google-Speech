import { SelectUser, SelectUserError } from '../types/auth/user';

export const selectUser: SelectUser = (state) => state.auth.user;
export const selectUserError: SelectUserError = (state) => state.auth.error;
