import axios, { AxiosResponse } from 'axios';
import { URL } from '../constants/urls';
import { Word } from '../redux/types/words/words';

export const getWordsByPageAndGroup = async (
  page = 0,
  group = 0,
): Promise<AxiosResponse<Word[]>> => {
  return axios.get(URL.WORDS + `?page=${page}&group=${group}`);
};
