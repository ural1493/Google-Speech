import { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button, Typography, TextField } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../core/components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { loginInit } from '../../core/redux/actions/auth/login';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { MainRoutes } from '../../core/constants/MainRouters';
import { validate } from './validation';

export const Login: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.auth.user);

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

  useEffect(() => {
    if (user) {
      navigate(MainRoutes.Main);
    }
  }, [user, navigate]);

  return (
    <>
      <Typography align="center" variant="h2">
        {t('login')}
      </Typography>
      <AuthForm onSubmit={formik.handleSubmit}>
        <TextField
          required
          error={formik.errors?.email ? true : false}
          helperText={formik.errors?.email}
          label={t('email')}
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          required
          error={formik.errors?.password ? true : false}
          helperText={formik.errors?.password}
          label={t('password')}
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
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