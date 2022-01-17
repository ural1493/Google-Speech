import { createAction } from '@reduxjs/toolkit';
import { UserData } from '../../../interfaces/db';
import { StatisticsActionTypes } from '../../types/statistics/statistics';

export const getUsersStatistics = createAction(
  StatisticsActionTypes.GET_USERS_STATISTICS,
);

export const getUsersStatisticsSuccess = createAction(
  StatisticsActionTypes.GET_USERS_STATISTICS_SUCCESS,
  (users: UserData[] | null) => ({
    payload: {
      users,
    },
  }),
);

export const getUsersStatisticsFail = createAction(
  StatisticsActionTypes.GET_USERS_STATISTICS_FAIL,
  (error: string) => ({
    payload: {
      error,
    },
  }),
);
