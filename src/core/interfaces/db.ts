import { Timestamp } from 'firebase/firestore';

export interface Answers {
  right: number;
  wrong: number;
}

export interface UserData {
  id: string;
  email: string | null;
  date: Timestamp;
  score: number;
  groups: Answers[];
}
