import { FC } from 'react';
import { Button } from '../../core/components/Button/Button';
import { StartHeader } from './styled/StartHeader';
import { StartText } from './styled/StartText';
import { StartContainer } from './styled/StartContainer';
import { Link } from '../../core/components/AuthLink/styled/Link';
import { MainRoutes } from '../../core/constants/MainRouters';
import { useTranslation } from 'react-i18next';

export const Start: FC = () => {
  const { t } = useTranslation();

  return (
    <StartContainer>
      <StartHeader>SPEAKIT</StartHeader>
      <StartText>{t('startText')}</StartText>
      <Button>
        <Link to={MainRoutes.Main}>{t('start')}</Link>
      </Button>
    </StartContainer>
  );
};
