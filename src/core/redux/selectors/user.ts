import { User } from '@firebase/auth';
import { RootState } from '../store';

export const selectUser = (state: RootState): User | null => state.auth.user;

export const selectUserError = (state: RootState): string | null =>
  state.auth.error;
