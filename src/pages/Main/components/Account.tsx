import { FC } from 'react';
import { Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import { Button } from '../../../core/components/Button/Button';
import { auth } from '../../../core/firebase/';
import { useTypedSelector } from '../../../core/hooks/typedReduxHooks';
import { selectEmail } from '../../../core/redux/selectors/user';
import { useTranslation } from 'react-i18next';
import { AccountContainer } from '../styled/AccountContainer';

export const Account: FC = () => {
  const { t } = useTranslation();
  const email = useTypedSelector(selectEmail);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <AccountContainer>
      <Typography>{email}</Typography>
      <Button onClick={handleLogout}>{t('logout')}</Button>
    </AccountContainer>
  );
};
