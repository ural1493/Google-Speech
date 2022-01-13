import { FC } from 'react';
import { Button } from '../../core/components/Button/Button';
import { StartHeader } from './styled/StartHeader';
import { StartText } from './styled/StartText';
import { StartContainer } from './styled/StartContainer';
import { Link } from '../../core/components/AuthLink/styled/Link';
import { MainRoutes } from '../../core/constants/MainRouters';

// TODO
import { signOut } from 'firebase/auth';
import { auth } from '../../core/firebase';
import { useTranslation } from 'react-i18next';

export const Start: FC = () => {
  const { t } = useTranslation();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <StartContainer>
      <StartHeader onClick={handleLogout}>SPEAKIT</StartHeader>
      <StartText>{t('startText')}</StartText>
      <Button>
        <Link to={MainRoutes.Main}>{t('start')}</Link>
      </Button>
    </StartContainer>
  );
};
