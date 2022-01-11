import { FC, useEffect, useState } from 'react';
import { Button } from '../../core/components/Button/Button';
import { ButtonContainer } from './styled/ButtonContainer';
import { MainContainer } from './styled/MainContainer';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getWords } from '../../core/redux/actions/words/words';
import { ChosenImage } from './styled/ChosenImage';
import { Word } from '../../core/components/Word/Word';
import { Results } from '../../core/components/Results/Results';
import { CircularProgress, MenuItem, Select } from '@mui/material';
import { groupCoefficients } from '../../core/constants/app';
import { getLastWord } from '../../core/helpers/words';
import { useSpeech } from '../../core/hooks/useSpeech';

export const Main: FC = () => {
  const [chosenImg, setChosenImg] = useState('');
  const groups = Object.keys(groupCoefficients);
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
              Number(category) + 1
            }`}</MenuItem>
          ))}
        </Select>
      </div>
      <ChosenImage imageUrl={chosenImg} />

      <div>{listening ? t('on') : t('off')}</div>
      <div>{getLastWord(transcript)}</div>
      <div>
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
