import { FC, useEffect, useMemo, useState } from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  TableSortLabel,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { getUsersStatistics } from '../../core/redux/actions/statistics/statistics';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { selectUsersStatistics } from '../../core/redux/selectors/statistics';

import { UserData } from '../../core/interfaces/db';
import { useTranslation } from 'react-i18next';
import { OrderType } from '../../core/interfaces/statistics';
import { StatisticsTableBody } from '../../core/components/StatisticsTableBody/StatisticsTableBody';

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

  const headerCells = useMemo(
    () => [
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
    ],
    [t],
  );

  const sortableHeadearCells = useMemo(() => {
    return headerCells.slice(1);
  }, [headerCells]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{headerCells[0].label}</TableCell>
            {sortableHeadearCells.map(({ id, label }) => (
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
  );
};
