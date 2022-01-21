import { FC } from 'react';
import { Button } from '../../core/components/Button/Button';
import { StartHeader } from './components/StartHeader';
import { StartText } from './components/StartText';
import { StartContainer } from './components/StartContainer';
import { Link } from '../../core/components/AuthLink/styled/Link';
import { MainRoutes } from '../../core/constants/MainRouters';
import { useTranslation } from 'react-i18next';

export const Start: FC = () => {
  const { t } = useTranslation();

  return (
    <StartContainer>
      <StartHeader>{t('logoText')}</StartHeader>
      <StartText>{t('startText')}</StartText>
      <Button>
        <Link to={MainRoutes.Main}>{t('start')}</Link>
      </Button>
    </StartContainer>
  );
};
