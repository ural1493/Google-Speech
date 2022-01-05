import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export interface SpeechRecognitionInstance extends SpeechRecognition {
  onspeechend: null | (() => void);
  onend: null | (() => void);
  onaudioend: null | (() => void);
  start: () => void;
  stop: () => void;
  onspeechstart: null | (() => void);
  onresult: null | (() => void);
}

export interface UseSpeech {
  transcript: ReturnType<typeof useSpeechRecognition>['transcript'];
  listening: ReturnType<typeof useSpeechRecognition>['listening'];
  handleStartListening: () => void;
  handleStopListening: () => void;
}
