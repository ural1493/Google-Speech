import { FC } from 'react';

interface ChosenImageProps {
  imageUrl: string;
}

export const ChosenImage: FC<ChosenImageProps> = ({ imageUrl }) => {
  return (
    <div>
      <img
        width={400}
        src={
          !imageUrl
            ? 'https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/files/01_0001.jpg'
            : `https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${imageUrl}`
        }
        alt=""
      />
    </div>
  );
};
