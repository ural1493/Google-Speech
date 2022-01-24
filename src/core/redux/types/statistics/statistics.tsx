import {
  getUsersStatistics,
  getUsersStatisticsFail,
  getUsersStatisticsSuccess,
} from '../../actions/statistics/statistics';

export enum StatisticsActionTypes {
  GET_USERS_STATISTICS = 'GET_USERS_STATISTICS',
  GET_USERS_STATISTICS_SUCCESS = 'GET_USERS_STATISTICS_SUCCESS',
  GET_USERS_STATISTICS_FAIL = 'GET_USERS_STATISTICS_FAIL',
}

export type StatisticsAction = ReturnType<
  | typeof getUsersStatistics
  | typeof getUsersStatisticsSuccess
  | typeof getUsersStatisticsFail
>;
