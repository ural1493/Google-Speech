import { FC } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AuthForm } from '../../core/components/AuthForm/AuthForm';
import { loginInit } from '../../core/redux/actions/auth/login';
import { validate } from './validation';
import { Button } from '../../core/components/Button/Button';
import { Heading } from '../../core/components/Heading/Heading';
import { TextFiled } from '../../core/components/TextField/TextField';
import { AuthLink } from '../../core/components/RegistrateLink/RegistrateLink';
import { MainRoutes } from '../../core/constants/MainRouters';
import { Alert } from '@mui/material';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { selectUserError } from '../../core/redux/selectors/user';
import { clearError } from '../../core/redux/actions/auth/registration';

export const Login: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useTypedSelector(selectUserError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    isInitialValid: false,
    validate,
    onSubmit: (values) => {
      dispatch(loginInit(values));
    },
  });

  const handleCloseError = () => {
    dispatch(clearError());
  };

  return (
    <>
      <Heading align="center" variant="h2">
        {t('login')}
      </Heading>
      <AuthLink to={MainRoutes.Register}>{t('registrate')}</AuthLink>
      <AuthForm onSubmit={formik.handleSubmit}>
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
        {error && (
          <Alert severity="error" onClose={handleCloseError}>
            {t(error)}
          </Alert>
        )}
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
