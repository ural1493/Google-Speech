import { MAX_PAGE } from '../constants/app';

export const getRandomPage = (): number => Math.floor(Math.random() * MAX_PAGE);
