import { UserData } from '../../interfaces/db';
import {
  StatisticsAction,
  StatisticsActionTypes,
} from '../types/statistics/statistics';

interface StatisticsState {
  users: UserData[] | null;
  error: string | null;
  isLoading: boolean;
}

const defaultState: StatisticsState = {
  users: null,
  error: null,
  isLoading: false,
};

export const statisticsReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = defaultState,
  action: StatisticsAction,
): StatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.GET_USERS_STATISTICS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case StatisticsActionTypes.GET_USERS_STATISTICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload.users,
      };

    default:
      return state;
  }
};
