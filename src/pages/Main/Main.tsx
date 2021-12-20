import { FC } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../core/firebase';

export const Main: FC = () => {
  const handleLogout = () => {
    signOut(auth);
  };
  return <div onClick={handleLogout}>MAIN</div>;
};
