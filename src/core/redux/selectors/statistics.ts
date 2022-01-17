import { UserData } from '../../interfaces/db';
import { RootState } from '../reducers';

export const selectUsersStatistics = (state: RootState): UserData[] | null =>
  state.statistics.users;
