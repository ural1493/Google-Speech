import { User } from '@firebase/auth';
import { createAction } from '@reduxjs/toolkit';
import { RegistrationActionTypes } from '../../types/auth/registration';

export const registrationInit = createAction(
  RegistrationActionTypes.REGISTRATION_INIT,
  (values: { email: string; password: string }) => ({
    payload: values,
  }),
);

export const registrationStart = createAction(
  RegistrationActionTypes.REGISTRATION_START,
);

export const registrationSuccess = createAction(
  RegistrationActionTypes.REGISTRATION_SUCCESS,
  (user: User | null) => ({
    payload: user,
  }),
);

export const registrationFail = createAction(
  RegistrationActionTypes.REGISTRATION_FAIL,
  (errorMessage: string) => ({
    payload: errorMessage,
  }),
);
