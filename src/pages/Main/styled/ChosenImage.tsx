import { FC } from 'react';
import startImage from '../../../assets/default.jpg';
import { url } from '../../../core/constants/urls';

interface ChosenImageProps {
  imageUrl: string;
}

export const ChosenImage: FC<ChosenImageProps> = ({ imageUrl }) => {
  return (
    <div>
      <img
        width={400}
        src={!imageUrl ? startImage : `${url.ASSETS}${imageUrl}`}
        alt=""
      />
    </div>
  );
};
