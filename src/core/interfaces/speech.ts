import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';
import { Word } from './words';

export interface UseSpeechReturn {
  transcript: string;
  listening: boolean;
  words: Word[] | null;
  answeredWords: string[];
  skippedWords: string[];
  group: number;
  isLoading: boolean;
  resultsIsOpen: boolean;
  handleStartListening: () => void;
  handleStopListening: () => void;
  handleReset: () => void;
  handleClose: () => void;
  handleSkipWord: (id: string, event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCategory: (event: SelectChangeEvent) => void;
}
