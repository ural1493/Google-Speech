import { FC, useEffect, useState, ChangeEvent, useCallback } from 'react';
import { Button } from '../../core/components/Button/Button';
import { ButtonContainer } from './styled/ButtonContainer';
import { MainContainer } from './styled/MainContainer';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  checkWord,
  getWords,
  resetWords,
  setGroup,
  setSkippedWords,
} from '../../core/redux/actions/words/words';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { ChosenImage } from './styled/ChosenImage';
import { Word } from '../../core/components/Word/Word';
import { Results } from '../../core/components/Results/Results';
import { selectWords } from '../../core/redux/selectors/words';
import {
  CircularProgress,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { groupCoefficients } from '../../core/constants/app';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export const Main: FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [chosenImg, setChosenImg] = useState('');
  const [resultsIsOpen, setResultsIsOpen] = useState(false);
  const groups = Object.keys(groupCoefficients);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { words, answeredWords, skippedWords, group, isLoading } =
    useTypedSelector(selectWords);

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch, group]);

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

  const handleSkipWord = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSkippedWords(id, e.target.checked));
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    dispatch(setGroup(+event.target.value));
  };

  return (
    <MainContainer>
      <div>
        <Select
          onChange={handleChangeCategory}
          defaultValue={groups[0]}
          label="category"
        >
          {groups.map((category) => (
            <MenuItem value={category} key={category}>{`category ${
              +category + 1
            }`}</MenuItem>
          ))}
        </Select>
      </div>
      <ChosenImage imageUrl={chosenImg} />

      <div>{listening ? 'on' : 'off'}</div>
      <div>{transcript.split(' ').pop()}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          words &&
          words.map(({ word, transcription, id, audio, image }) => (
            <Word
              key={id}
              id={id}
              word={word}
              transcription={transcription}
              audio={audio}
              image={image}
              onImageChange={setChosenImg}
              onSkipWord={handleSkipWord}
              isAnswered={answeredWords.includes(id)}
            />
          ))
        )}
      </div>
      <ButtonContainer>
        <Button onClick={handleReset}>{t('restart')}</Button>
        <Button onClick={handleStartListening}>{t('speakPlease')}</Button>
        <Button>{t('results')}</Button>
      </ButtonContainer>
      <Results
        onClose={handleClose}
        isOpen={resultsIsOpen}
        words={words}
        rightAnswers={answeredWords}
      />
    </MainContainer>
  );
};
