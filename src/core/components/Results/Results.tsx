import { FC } from 'react';
import { Word } from '../Word/Word';
import { Modal } from '@mui/material';
import { Word as WordType } from '../../interfaces/words';
import { ModalContainer } from './styled/ModalContainer';

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
      <ModalContainer>
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
      </ModalContainer>
    </Modal>
  );
};
