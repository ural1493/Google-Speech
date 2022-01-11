import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { UseSpeechReturn } from '../interfaces/speech';
import {
  checkWord,
  getWords,
  resetWords,
  setGroup,
  setSkippedWords,
} from '../redux/actions/words/words';
import { selectWords } from '../redux/selectors/words';
import { useTypedSelector } from './typedReduxHooks';

export const useSpeech = (): UseSpeechReturn => {
  const dispatch = useDispatch();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { words, answeredWords, skippedWords, group, isLoading } =
    useTypedSelector(selectWords);
  const [resultsIsOpen, setResultsIsOpen] = useState(false);

  const handleStartListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ language: 'en-US', continuous: true });
  };

  const handleStopListening = useCallback(() => {
    SpeechRecognition.stopListening();
  }, []);

  useEffect(() => {
    dispatch(checkWord(transcript));
  }, [dispatch, transcript]);

  useEffect(() => {
    if (words && answeredWords) {
      const skippedWordsAmount = skippedWords.length;
      const answeredWordsAmount = answeredWords.length;
      const AllWordsAmount = words.length;

      if (skippedWordsAmount + answeredWordsAmount === AllWordsAmount) {
        handleStopListening();
        resetTranscript();
        setResultsIsOpen(true);
      }
    }
  }, [
    answeredWords,
    words,
    skippedWords,
    handleStopListening,
    resetTranscript,
  ]);

  const handleReset = () => {
    resetTranscript();
    dispatch(resetWords());
    dispatch(getWords());
  };

  const handleClose = () => {
    setResultsIsOpen(false);
    handleReset();
  };

  const handleSkipWord = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSkippedWords(id, event.target.checked));
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    dispatch(setGroup(Number(event.target.value)));
  };

  return {
    transcript,
    listening,
    words,
    answeredWords,
    skippedWords,
    group,
    isLoading,
    resultsIsOpen,
    handleStartListening,
    handleStopListening,
    handleReset,
    handleClose,
    handleSkipWord,
    handleChangeCategory,
  };
};
