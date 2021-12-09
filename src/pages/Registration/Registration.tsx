import { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, Button } from '@mui/material/';
import { AuthForm } from '../../core/components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { registrationInit } from '../../core/redux/actions/auth/registration';
import { MainRoutes } from '../../core/constants/MainRouters';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { validate } from './validation';

export const Registration: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    isInitialValid: false,
    // validateOnBlur: true,
    // validateOnChange: true,
    validate,
    onSubmit: (values) => {
      // const errorValues = validate(values);
      const { email, password } = values;
      const userData = { email, password };
      dispatch(registrationInit(userData));
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
        {t('registration')}
      </Typography>
      <AuthForm onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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
        <TextField
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
