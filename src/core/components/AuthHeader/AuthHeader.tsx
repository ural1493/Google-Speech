import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading } from '../Heading/Heading';

export const AuthHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <Heading align="center" variant="h2">
      {t('logoText')}
    </Heading>
  );
};
