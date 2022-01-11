import { Word } from '../interfaces/words';

export const getRandomPage = (maxPage: number): number =>
  Math.floor(Math.random() * maxPage);

export const playAudio = (url: string): void => {
  const audioComponent = new Audio();
  audioComponent.src = url;
  audioComponent.play();
};

export const compareWords =
  (wordToCheck: string | undefined) =>
  (word: Word): boolean =>
    word.word.toLowerCase() === wordToCheck?.toLowerCase();

export const getLastWord = (words: string): string | undefined =>
  words.split(' ').pop();
