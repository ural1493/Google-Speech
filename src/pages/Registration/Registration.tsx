import { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthForm } from '../../core/components/AuthForm/AuthForm';
import { registrationInit } from '../../core/redux/actions/auth/registration';
import { MainRoutes } from '../../core/constants/MainRouters';
import { useTypedSelector } from '../../core/hooks/typedReduxHooks';
import { validate } from './validation';
import { StyledButton } from '../../core/components/StyledButton/StyledButton';
import { Heading } from '../../core/components/Heading/Heading';
import { StyledTextFiled } from '../../core/components/StyledTextField/StyledTextField';

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
    validate,
    onSubmit: (values) => {
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
      <Heading align="center" variant="h2">
        {t('registration')}
      </Heading>
      <AuthForm onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <StyledTextFiled
          required
          error={formik.errors?.email ? true : false}
          helperText={formik.errors?.email}
          label={t('email')}
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <StyledTextFiled
          required
          error={formik.errors?.password ? true : false}
          helperText={formik.errors?.password}
          label={t('password')}
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <StyledTextFiled
          required
          error={formik.errors?.confirmPassword ? true : false}
          helperText={formik.errors?.confirmPassword}
          label={t('confirmPassword')}
          id="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <StyledButton
          disabled={!formik.isValid && !formik.isValidating}
          size="large"
          variant="contained"
          type="submit"
        >
          {t('submit')}
        </StyledButton>
      </AuthForm>
    </>
  );
};
