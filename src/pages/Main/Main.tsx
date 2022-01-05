import { FC, useEffect, useState, ChangeEvent } from 'react';
import { Button } from '../../core/components/Button/Button';
import { ButtonContainer } from './styled/ButtonContainer';
import { MainContainer } from './styled/MainContainer';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  getWords,
  resetWords,
  setGroup,
  setSkippedWords,
} from '../../core/redux/actions/words/words';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { ChosenImage } from './styled/ChosenImage';
import { Word } from '../../core/components/Word/Word';
import { Results } from '../../core/components/Results/Results';
import { useSpeech } from '../../core/hooks/useSpeech';
import { selectWords } from '../../core/redux/selectors/words';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { groupCoefficients } from '../../core/constants/app';

export const Main: FC = () => {
  const { transcript, listening, handleStartListening, handleStopListening } =
    useSpeech();
  const [chosenImg, setChosenImg] = useState('');
  const [resultsIsOpen, setResultsIsOpen] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { words, answeredWords, skippedWords, group } =
    useTypedSelector(selectWords);

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch, group]);

  useEffect(() => {
    if (words && answeredWords) {
      const skippedWordsAmount = skippedWords.length;
      const answeredWordsAmount = answeredWords.length;
      const AllWordsAmount = words.length;

      if (skippedWordsAmount + answeredWordsAmount === AllWordsAmount) {
        handleStopListening();
        setResultsIsOpen(true);
      }
    }
  }, [answeredWords, words, skippedWords, handleStopListening]);

  const handleClose = () => {
    setResultsIsOpen(false);
    dispatch(resetWords());
    dispatch(getWords());
  };

  const handleSkipWord = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSkippedWords(id, e.target.checked));
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    dispatch(setGroup(+event.target));
  };

  return (
    <MainContainer>
      <div>
        <Select
          onChange={handleChangeCategory}
          defaultValue={Object.keys(groupCoefficients)[0]}
          label="category"
        >
          {Object.keys(groupCoefficients).map((category) => (
            <MenuItem value={category} key={category}>{`category ${
              +category + 1
            }`}</MenuItem>
          ))}
        </Select>
      </div>
      <ChosenImage imageUrl={chosenImg} />

      <div>{listening ? 'on' : 'off'}</div>
      <div>{transcript}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {words &&
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
          ))}
      </div>
      <ButtonContainer>
        <Button>{t('restart')}</Button>
        <Button onClick={handleStartListening}>{t('speakPlease')}</Button>
        <Button>{t('results')}</Button>
        <button onClick={handleStopListening}>STOP</button>
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
