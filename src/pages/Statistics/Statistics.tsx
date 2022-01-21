import { FC, useEffect, useState } from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TableSortLabel,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { getUsersStatistics } from '../../core/redux/actions/statistics/statistics';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { selectUsersStatistics } from '../../core/redux/selectors/statistics';

import { UserData } from '../../core/interfaces/db';
import { useTranslation } from 'react-i18next';
import { OrderType } from '../../core/interfaces/statistics';
import { StatisticsTableBody } from './components/StatisticsTableBody';
import { Container } from './components/Container';
import { AuthLink } from '../../core/components/AuthLink/AuthLink';
import { MainRoutes } from '../../core/constants/MainRouters';
import { StatisticsContainer } from './components/StatisticsContainer';

export const Statistics: FC = () => {
  const dispatch = useDispatch();
  const usersStatistics = useTypedSelector(selectUsersStatistics);
  const { t } = useTranslation();

  const [order, setOrder] = useState<OrderType>('asc');
  const [orderBy, setOrderBy] = useState<keyof UserData>('score');

  const handleRequestSort = (property: keyof UserData) => () => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    dispatch(getUsersStatistics());
  }, [dispatch]);

  const headerCells = [
    {
      id: '',
      label: '№',
    },
    {
      id: 'email',
      label: t('email'),
    },
    {
      id: 'date',
      label: t('date'),
    },
    {
      id: 'score',
      label: t('score'),
    },
  ];

  const sortableHeaderCells = headerCells.slice(1);

  return (
    <StatisticsContainer>
      <AuthLink to={MainRoutes.Main}>{t('back')}</AuthLink>
      <TableContainer component={Container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">{headerCells[0].label}</TableCell>
              {sortableHeaderCells.map(({ id, label }) => (
                <TableCell
                  key={id}
                  align="center"
                  sortDirection={orderBy === id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === id}
                    direction={orderBy === id ? order : 'asc'}
                    onClick={handleRequestSort(id as keyof UserData)}
                  >
                    {label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <StatisticsTableBody
            usersStatistics={usersStatistics}
            order={order}
            orderBy={orderBy}
          />
        </Table>
      </TableContainer>
    </StatisticsContainer>
  );
};
