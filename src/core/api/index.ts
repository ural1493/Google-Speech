import axios, { AxiosResponse } from 'axios';
import { url } from '../constants/urls';
import { Word } from '../interfaces/words';

export const getWordsByPageAndGroup = async (
  page = 0,
  group = 0,
): Promise<AxiosResponse<Word[]>> => {
  return axios.get(`${url.WORDS}?page=${page}&group=${group}`);
};
