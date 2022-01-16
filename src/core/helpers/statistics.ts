import { Timestamp } from 'firebase/firestore';
import { UserData } from '../interfaces/db';
import { OrderType } from '../interfaces/statistics';

export const formatDateFromTimestamp = (timestamp: Timestamp): string => {
  const date = timestamp.toDate();
  const formatedDate = date.toLocaleDateString().replaceAll('.', '/');
  const formatedTime = date.toLocaleTimeString();
  return `${formatedDate}, ${formatedTime}`;
};

function descendingComparator(
  a: UserData,
  b: UserData,
  orderBy: keyof UserData,
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(
  order: OrderType,
  orderBy: keyof UserData,
): (a: UserData, b: UserData) => number {
  return order === 'desc'
    ? (a: UserData, b: UserData) => descendingComparator(a, b, orderBy)
    : (a: UserData, b: UserData) => -descendingComparator(a, b, orderBy);
}
