import { User } from 'firebase/auth';
import { RootState } from '../reducers';

export const selectUser = (state: RootState): User | null => state.auth.user;
