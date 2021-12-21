import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/typedReduxHooks';
import { selectUser } from '../../redux/selectors/user';

type RequireAuthProps = {
  redirectTo: string;
  forAuth?: boolean;
};

export const RequireAuth: FC<RequireAuthProps> = ({
  redirectTo,
  children,
  forAuth = false,
}) => {
  const user = useTypedSelector(selectUser);

  if (forAuth) {
    return user ? <Navigate to={redirectTo} /> : (children as ReactElement);
  }

  return user ? (children as ReactElement) : <Navigate to={redirectTo} />;
};
