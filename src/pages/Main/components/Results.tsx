import { FC } from 'react';
import { Word } from '../../../core/components/Word/Word';
import { Modal, Typography } from '@mui/material';
import { Word as WordType } from '../../../core/interfaces/words';
import { ModalContainer } from './ModalContainer';
import { useTranslation } from 'react-i18next';
import { ModalContent } from './ModalContent';
import { Button } from '../../../core/components/Button/Button';

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
  const { t } = useTranslation();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <Typography>{t('right')}</Typography>
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
          <Typography>{t('wrong')}</Typography>
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
        </ModalContent>
        <Button onClick={onClose}>{t('back')}</Button>
      </ModalContainer>
    </Modal>
  );
};
