import { FC } from 'react';
import { Typography } from '@mui/material';
import { SoundIcon } from '../SoundIcon/SoundIcon';
import { SvgContainer } from './SvgContainer';
import { WordContainer } from './WordContainer';
import { TextContainer } from './TextContainer';
import { URL } from '../../constants/urls';

interface WordProps {
  word: string;
  transcription: string;
  audio: string;
  image: string;
  isAnswered: boolean;
  onImageChange: (image: string) => void;
}

const audioComponent = new Audio();

export const Word: FC<WordProps> = ({
  word,
  transcription,
  audio,
  image,
  onImageChange,
  isAnswered,
}) => {
  const handleClick = () => {
    audioComponent.src = URL.DATA + audio;
    audioComponent.play();
    onImageChange(image);
  };

  return (
    <WordContainer onClick={handleClick}>
      <SvgContainer>
        <SoundIcon />
      </SvgContainer>
      <TextContainer>
        {isAnswered && 'HUI'}
        <Typography>{word}</Typography>
        <Typography>{transcription}</Typography>
      </TextContainer>
    </WordContainer>
  );
};
