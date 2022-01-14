import { FC, useEffect, useState } from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  Paper,
  TableSortLabel,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { getUsersStatistics } from '../../core/redux/actions/statistics/statistics';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { selectUsersStatistics } from '../../core/redux/selectors/statistics';
import { formatDateFromTimestamp } from '../../core/helpers/statistics';
import { UserData } from '../../core/interfaces/db';

const headerCells = [
  {
    id: '',
    label: '№',
  },
  {
    id: 'email',
    label: 'email',
  },
  {
    id: 'date',
    label: 'date',
  },
  {
    id: 'score',
    label: 'score',
  },
];

function descendingComparator(
  a: UserData,
  b: UserData,
  orderBy: keyof UserData,
) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (b[orderBy]! < a[orderBy]!) {
    return -1;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (b[orderBy]! > a[orderBy]!) {
    return 1;
  }
  return 0;
}

function getComparator(order: 'asc' | 'desc', orderBy: keyof UserData) {
  return order === 'desc'
    ? (a: UserData, b: UserData) => descendingComparator(a, b, orderBy)
    : (a: UserData, b: UserData) => -descendingComparator(a, b, orderBy);
}

export const Statistics: FC = () => {
  const dispatch = useDispatch();
  const usersStatistics = useTypedSelector(selectUsersStatistics);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof UserData>('score');

  const handleRequestSort = (property: keyof UserData) => () => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    dispatch(getUsersStatistics());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{headerCells[0].label}</TableCell>
            {headerCells.slice(1).map(({ id, label }) => (
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
        <TableBody>
          {usersStatistics &&
            usersStatistics
              .slice()
              .sort(getComparator(order, orderBy))
              .map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">
                    {formatDateFromTimestamp(user.date)}
                  </TableCell>
                  <TableCell align="center">{user.score}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
