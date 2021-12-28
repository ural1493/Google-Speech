import { ChangeEvent, FC } from 'react';
import { Typography } from '@mui/material';
import { SoundIcon } from '../SoundIcon/SoundIcon';
import { SvgContainer } from './SvgContainer';
import { WordContainer } from './WordContainer';
import { TextContainer } from './TextContainer';
import { URL } from '../../constants/urls';

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
    audioComponent.src = URL.DATA + audio;
    audioComponent.play();

    if (onImageChange && image) {
      onImageChange(image);
    }
  };

  const handleSkipWord = (e: ChangeEvent<HTMLInputElement>) => {
    if (onSkipWord && id) {
      onSkipWord(id, e);
    }
  };

  return (
    <WordContainer onClick={handleClick}>
      <SvgContainer>
        <SoundIcon />
      </SvgContainer>
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
