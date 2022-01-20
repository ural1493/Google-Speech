import { FC } from 'react';
import startImage from '../../../assets/default.jpg';
import { url } from '../../../core/constants/urls';
import { MainImg } from '../styled/MainImg';

interface ChosenImageProps {
  imageUrl: string;
}

export const ChosenImage: FC<ChosenImageProps> = ({ imageUrl }) => {
  return (
    <MainImg src={!imageUrl ? startImage : `${url.ASSETS}${imageUrl}`} alt="" />
  );
};
