import { ChangeEvent, FC } from 'react';
import { Typography } from '@mui/material';
import { WordContainer } from './WordContainer';
import { TextContainer } from './TextContainer';
import { url } from '../../constants/urls';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface WordProps {
  id?: string;
  word: string;
  transcription: string;
  audio: string;
  image?: string;
  isAnswered?: boolean;
  onImageChange?: (image: string) => void;
  onSkipWord?: (id: string, e: ChangeEvent<HTMLInputElement>) => void;
}

const audioComponent = new Audio();

export const Word: FC<WordProps> = ({
  id,
  word,
  transcription,
  audio,
  image,
  onImageChange,
  onSkipWord,
  isAnswered,
}) => {
  const handleClick = () => {
    audioComponent.src = `${url.DATA}${audio}`;
    audioComponent.play();

    if (onImageChange && image) {
      onImageChange(image);
    }
  };

  const handleSkipWord = (event: ChangeEvent<HTMLInputElement>) => {
    if (onSkipWord && id) {
      onSkipWord(id, event);
    }
  };

  return (
    <WordContainer onClick={handleClick}>
      <VolumeUpIcon />
      <TextContainer>
        {isAnswered && 'молодчик'}
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={handleSkipWord}
        />
        <Typography>{word}</Typography>
        <Typography>{transcription}</Typography>
      </TextContainer>
    </WordContainer>
  );
};
