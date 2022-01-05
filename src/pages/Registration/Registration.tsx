import { FC } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AuthForm } from '../../core/components/AuthForm/AuthForm';
import { registrationInit } from '../../core/redux/actions/auth/registration';
import { validate } from './validation';
import { Button } from '../../core/components/Button/Button';
import { Heading } from '../../core/components/Heading/Heading';
import { TextFiled } from '../../core/components/TextField/TextField';
import { AuthLink } from '../../core/components/RegistrateLink/RegistrateLink';
import { MainRoutes } from '../../core/constants/MainRouters';

export const Registration: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    isInitialValid: false,
    validate,
    onSubmit: (values) => {
      const { email, password } = values;
      const userData = { email, password };
      dispatch(registrationInit(userData));
    },
  });

  return (
    <>
      <Heading align="center" variant="h2">
        {t('registration')}
      </Heading>
      <AuthLink to={MainRoutes.Login}>{t('login')}</AuthLink>
      <AuthForm onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <TextFiled
          required
          error={formik.errors?.email ? true : false}
          helperText={formik.errors?.email}
          label={t('email')}
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextFiled
          required
          error={formik.errors?.password ? true : false}
          helperText={formik.errors?.password}
          label={t('password')}
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <TextFiled
          required
          error={formik.errors?.confirmPassword ? true : false}
          helperText={formik.errors?.confirmPassword}
          label={t('confirmPassword')}
          id="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <Button
          disabled={!formik.isValid && !formik.isValidating}
          size="large"
          variant="contained"
          type="submit"
        >
          {t('submit')}
        </Button>
      </AuthForm>
    </>
  );
};
