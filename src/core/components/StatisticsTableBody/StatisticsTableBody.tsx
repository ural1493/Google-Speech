import { TableBody, TableCell, TableRow } from '@mui/material';
import {
  formatDateFromTimestamp,
  getComparator,
} from '../../helpers/statistics';
import { UserData } from '../../interfaces/db';
import { OrderType } from '../../interfaces/statistics';
import { FC } from 'react';

interface StatisticsTableBodyProps {
  usersStatistics: UserData[] | null;
  order: OrderType;
  orderBy: keyof UserData;
}

export const StatisticsTableBody: FC<StatisticsTableBodyProps> = ({
  usersStatistics,
  order,
  orderBy,
}) => {
  return (
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
  );
};
