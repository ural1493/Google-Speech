import { regexp } from '../../core/constants/Regexp';
import { LoginValues } from '../../core/redux/types/auth/login';
import i18n from '../../core/i18n/i18n';

export type ErrorRegistrationValues = Partial<LoginValues>;

export const validate = (values: LoginValues) => {
  const errors: ErrorRegistrationValues = {};

  if (!regexp.regMailRules.test(values.email)) {
    errors.email = i18n.t('invalidEmail');
  }

  if (!regexp.regPasswordRules.test(values.password)) {
    errors.password = i18n.t('invalidPassword');
  }

  return errors;
};
