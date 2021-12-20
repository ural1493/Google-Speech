import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/typedReduxHooks';

type RequireAuthProps = {
  redirectTo: string;
};

export const RequireAuth: FC<RequireAuthProps> = ({ redirectTo, children }) => {
  const { user } = useTypedSelector((state) => state.auth);

  return user ? (children as ReactElement) : <Navigate to={redirectTo} />;
};
