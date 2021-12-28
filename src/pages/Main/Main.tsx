import { FC, useEffect, useState, ChangeEvent } from 'react';
import { Button } from '../../core/components/Button/Button';
import { ButtonContainer } from './styled/ButtonContainer';
import { MainContainer } from './styled/MainContainer';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getWords } from '../../core/redux/actions/words/words';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { ChosenImage } from './styled/ChosenImage';
import { Word } from '../../core/components/Word/Word';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { Results } from '../../core/components/Results/Results';

export const Main: FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [rightAnswers, setRightAnswers] = useState<string[]>([]);
  const [chosenImg, setChosenImg] = useState('');
  const [resultsIsOpen, setResultsIsOpen] = useState(false);
  const [skipWords, setSkipWords] = useState<string[]>([]);

  const handleClose = () => setResultsIsOpen(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data } = useTypedSelector((state) => state.words);

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  useEffect(() => {
    if (data && rightAnswers) {
      if (skipWords.length + rightAnswers.length === data.length) {
        setResultsIsOpen(true);
      }
    }
  }, [rightAnswers, data, skipWords]);

  const speechRecognitionInstance =
    SpeechRecognition.getRecognition() as SpeechRecognitionInstance;

  speechRecognitionInstance.onend = () => {
    const foundWord = data?.find((word) => word.word === transcript);
    if (
      foundWord &&
      !rightAnswers.includes(foundWord.id) &&
      !skipWords.includes(foundWord.id)
    ) {
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

  const handleSkipWord = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSkipWords((prevState) => [...prevState, id]);
    } else {
      setSkipWords((prevState) => [...prevState.filter((el) => el !== id)]);
    }
  };

  return (
    <MainContainer>
      <ChosenImage imageUrl={chosenImg} />

      <div>{listening ? 'on' : 'off'}</div>
      <div>{transcript}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data &&
          data.map(({ word, transcription, id, audio, image }) => (
            <Word
              key={id}
              id={id}
              word={word}
              transcription={transcription}
              audio={audio}
              image={image}
              onImageChange={setChosenImg}
              onSkipWord={handleSkipWord}
              isAnswered={rightAnswers.includes(id)}
            />
          ))}
      </div>
      <ButtonContainer>
        <Button>{t('restart')}</Button>
        <Button onClick={handleStartListening}>{t('speakPlease')}</Button>
        <Button>{t('results')}</Button>
      </ButtonContainer>
      <Results
        onClose={handleClose}
        isOpen={resultsIsOpen}
        data={data}
        rightAnswers={rightAnswers}
      />
    </MainContainer>
  );
};

interface SpeechRecognitionInstance extends SpeechRecognition {
  onspeechend: () => void;
  onend: () => void;
  onaudioend: () => void;
  start: () => void;
  stop: () => void;
  onspeechstart: () => void;
  onresult: () => void;
}
