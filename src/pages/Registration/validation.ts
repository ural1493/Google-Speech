import { regexp } from '../../core/constants/Regexp';
import { RegistrationValues } from '../../core/redux/types/auth/registration';
import i18n from '../../core/i18n/i18n';

export type ErrorRegistrationValues = Partial<RegistrationValues>;

export const validate = (values: RegistrationValues) => {
  const errors: ErrorRegistrationValues = {};
  // const isValid = regexp.regPasswordRules.test(values.password);

  if (!regexp.regMailRules.test(values.email)) {
    errors.email = i18n.t('invalidEmail');
  }

  if (!regexp.regPasswordRules.test(values.password)) {
    errors.password = i18n.t('invalidPassword');
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = i18n.t('passwordsDoNotMatch');
  }
  // console.log(regexp.regPasswordRules.test(values.password));
  return errors;
};