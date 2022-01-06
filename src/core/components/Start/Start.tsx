import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MainRoutes } from '../../constants/MainRouters';

export const Start: FC = () => {
  return (
    <div>
      <Link to={MainRoutes.Main}>Go to Main</Link>
    </div>
  );
};
