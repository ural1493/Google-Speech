import { FC } from 'react';
import { Word } from '../Word/Word';
import { Modal } from '@mui/material';
import { Word as WordType } from '../../interfaces/words';

interface ResultsProps {
  onClose: () => void;
  isOpen: boolean;
  words: WordType[] | null;
  rightAnswers: string[];
}

export const Results: FC<ResultsProps> = ({
  onClose,
  isOpen,
  words,
  rightAnswers,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <div>RIGHT:</div>
        {words &&
          words
            .filter(({ id }) => rightAnswers.includes(id))
            .map(({ word, transcription, id, audio }) => (
              <Word
                key={id}
                word={word}
                transcription={transcription}
                audio={audio}
              />
            ))}
        <div>WRONG:</div>
        {words &&
          words
            .filter(({ id }) => !rightAnswers.includes(id))
            .map(({ word, transcription, id, audio }) => (
              <Word
                key={id}
                word={word}
                transcription={transcription}
                audio={audio}
              />
            ))}
      </div>
    </Modal>
  );
};
