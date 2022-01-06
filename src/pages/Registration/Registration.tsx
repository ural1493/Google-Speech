import { FC } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AuthForm } from '../../core/components/AuthForm/AuthForm';
import {
  clearError,
  registrationInit,
} from '../../core/redux/actions/auth/registration';
import { validate } from './validation';
import { Button } from '../../core/components/Button/Button';
import { Heading } from '../../core/components/Heading/Heading';
import { TextFiled } from '../../core/components/TextField/TextField';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { selectUserError } from '../../core/redux/selectors/user';
import { Alert } from '@mui/material';

export const Registration: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useTypedSelector(selectUserError);

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

  const handleCloseError = () => {
    dispatch(clearError());
  };

  return (
    <>
      <Heading align="center" variant="h2">
        {t('registration')}
      </Heading>
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
