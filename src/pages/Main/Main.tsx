import { FC } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../core/firebase';
import { Link } from 'react-router-dom';
import { MainRoutes } from '../../core/constants/MainRouters';
import { Button } from '../../core/components/Button/Button';

export const Main: FC = () => {
  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Link to={MainRoutes.Start}>Go to start</Link>
      <Button onClick={handleLogOut}>Sign out</Button>
    </div>
  );
};
