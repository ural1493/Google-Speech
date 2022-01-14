import { Timestamp } from 'firebase/firestore';

export const formatDateFromTimestamp = (timestamp: Timestamp): string => {
  const date = timestamp.toDate();
  const formatedDate = date.toLocaleDateString().replaceAll('.', '/');
  const formatedTime = date.toLocaleTimeString();
  return `${formatedDate}, ${formatedTime}`;
};
