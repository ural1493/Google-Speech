import {
  registrationStart,
  registrationSuccess,
  registrationFail,
} from '../../actions/auth/registration';

export enum RegistrationActionTypes {
  REGISTRATION_INIT = 'REGISTRATION_INIT',
  REGISTRATION_START = 'REGISTRATION_START',
  REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
  REGISTRATION_FAIL = 'REGISTRATION_FAIL',
}

export type UserActionRegistrationTypes = ReturnType<
  | typeof registrationStart
  | typeof registrationSuccess
  | typeof registrationFail
>;

export type RegistrationValues = {
  email: string;
  password: string;
  confirmPassword: string;
};
