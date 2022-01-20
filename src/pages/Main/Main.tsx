import { FC, useEffect, useState } from 'react';
import { Button } from '../../core/components/Button/Button';
import { ButtonContainer } from './styled/ButtonContainer';
import { MainContainer } from './styled/MainContainer';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getWords } from '../../core/redux/actions/words/words';
import { ChosenImage } from './components/ChosenImage';
import { Word } from '../../core/components/Word/Word';
import { Results } from './components/Results';
import { CircularProgress, MenuItem, Select, Typography } from '@mui/material';
import { groupCoefficients } from '../../core/constants/app';
import { getLastWordFromString } from '../../core/helpers/words';
import { useSpeech } from '../../core/hooks/useSpeech';
import { useNavigate } from 'react-router-dom';
import { MainRoutes } from '../../core/constants/MainRouters';
import { WordsContainer } from './styled/WordsContainer';
import MicIcon from '@mui/icons-material/Mic';
import { TranscriptContainer } from './styled/TranscriptContainer';
import { Dropdown } from './styled/Dropdown';
import { MainHeader } from './styled/MainHeader';
import { Account } from './components/Account';

export const Main: FC = () => {
  const [chosenImg, setChosenImg] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    transcript,
    listening,
    words,
    answeredWords,
    group,
    isLoading,
    resultsIsOpen,
    handleStartListening,
    handleReset,
    handleClose,
    handleSkipWord,
    handleChangeCategory,
  } = useSpeech();

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch, group]);

  const handleRedirectToStatistics = () => {
    navigate(MainRoutes.Statistics);
  };

  return (
    <MainContainer>
      <MainHeader>
        <Dropdown>
          <Select
            onChange={handleChangeCategory}
            defaultValue={'0'}
            label="category"
          >
            {groupCoefficients.map((coefficient, index) => (
              <MenuItem value={index} key={coefficient}>{`category ${
                Number(index) + 1
              }`}</MenuItem>
            ))}
          </Select>
        </Dropdown>
        <Account />
      </MainHeader>
      <ChosenImage imageUrl={chosenImg} />
      <TranscriptContainer>
        <MicIcon color={listening ? 'success' : 'disabled'} fontSize="large" />
        <Typography>{getLastWordFromString(transcript)}</Typography>
      </TranscriptContainer>
      <WordsContainer>
        {isLoading ? (
          <CircularProgress size={100} />
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
      </WordsContainer>
      <ButtonContainer>
        <Button onClick={handleReset}>{t('restart')}</Button>
        <Button onClick={handleStartListening}>{t('speakPlease')}</Button>
        <Button onClick={handleRedirectToStatistics}>{t('results')}</Button>
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
