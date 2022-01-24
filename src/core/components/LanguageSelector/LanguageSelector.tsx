import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const languages = Object.keys(i18n.services.resourceStore.data);

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    const language = event.target.value;

    i18n.changeLanguage(language);
  };

  return (
    <Select
      onChange={handleChangeLanguage}
      value={currentLanguage}
      label="language"
    >
      {languages.map((language) => (
        <MenuItem value={language} key={language}>
          {i18n.getFixedT(language)('language')}
        </MenuItem>
      ))}
    </Select>
  );
};
