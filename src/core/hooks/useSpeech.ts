import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import {
  SpeechRecognitionInstance,
  UseSpeech,
} from '../interfaces/speechRecognition';
import { checkWord } from '../redux/actions/words/words';

const speechRecognitionInstance =
  SpeechRecognition.getRecognition() as SpeechRecognitionInstance;

const handleStartListening = () => {
  SpeechRecognition.startListening({
    language: 'en-US',
  });
};

const handleStopListening = () => {
  speechRecognitionInstance.onend = null;
  speechRecognitionInstance.onspeechstart = null;
  speechRecognitionInstance.stop();
  SpeechRecognition.stopListening();
};

export const useSpeech = (): UseSpeech => {
  const dispatch = useDispatch();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    speechRecognitionInstance.onend = () => {
      dispatch(checkWord(transcript));
      speechRecognitionInstance.start();
    };

    speechRecognitionInstance.onspeechstart = () => {
      resetTranscript();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  return {
    transcript,
    listening,
    handleStartListening,
    handleStopListening,
  };
};
