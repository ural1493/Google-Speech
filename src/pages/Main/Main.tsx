import { FC, useEffect, useState } from 'react';
import { Button } from '../../core/components/Button/Button';
import { ButtonContainer } from './styled/ButtonContainer';
import { MainContainer } from './styled/MainContainer';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getWords } from '../../core/redux/actions/words/words';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { ChosenImage } from './styled/ChosenImage';

import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Word } from '../../core/components/Word/Word';

export const Main: FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [rightAnswers, setRightAnswers] = useState<string[]>([]);
  const [chosenImg, setChosenImg] = useState('');

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state) => state.words);

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  const speechRecognitionInstance =
    SpeechRecognition.getRecognition() as SpeechRecognitionInstance;

  speechRecognitionInstance.onend = () => {
    const foundWord = data?.find((word) => word.word === transcript);
    if (foundWord) {
      setRightAnswers((prevState) => [...prevState, foundWord.id]);
    }

    speechRecognitionInstance.start();
  };
  speechRecognitionInstance.onspeechstart = () => {
    resetTranscript();
  };

  const handleStartListening = () => {
    SpeechRecognition.startListening({
      language: 'en-US',
    });
  };

  return (
    <MainContainer>
      <ChosenImage imageUrl={chosenImg} />
      <ButtonContainer>
        <Button>{t('restart')}</Button>
        <Button onClick={handleStartListening}>{t('speakPlease')}</Button>
        <Button>{t('results')}</Button>
      </ButtonContainer>
      <div>{listening ? 'on' : 'off'}</div>
      <div>{transcript}</div>
      {data &&
        data.map(({ word, transcription, id, audio, image }) => (
          <Word
            key={id}
            word={word}
            transcription={transcription}
            audio={audio}
            image={image}
            onImageChange={setChosenImg}
            isAnswered={rightAnswers.includes(id)}
            // TODO выражение в пропсах можно?
          />
        ))}
    </MainContainer>
  );
};

interface SpeechRecognitionInstance extends SpeechRecognition {
  onaudioend: () => void;
  start: () => void;
  stop: () => void;
  onspeechend: () => void;
  onend: () => void;
  onspeechstart: () => void;
  onresult: () => void;
}
