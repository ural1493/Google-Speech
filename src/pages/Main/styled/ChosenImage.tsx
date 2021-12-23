import { FC } from 'react';

interface ChosenImageProps {
  imageUrl: string;
}

export const ChosenImage: FC<ChosenImageProps> = ({ imageUrl }) => {
  return (
    <div>
      <img
        width={400}
        src={`https://raw.githubusercontent.com/irinainina/rslang/rslang-data/data/${imageUrl}`}
        alt=""
      />
    </div>
  );
};
