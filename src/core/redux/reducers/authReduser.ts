import { User } from '@firebase/auth';
import { UserAction, UserActionTypes } from '../types/auth/user';
import {
  RegistrationActionTypes,
  UserActionRegistrationTypes,
} from '../types/auth/registration';
import { UserActionLoginTypes, LoginActionTypes } from '../types/auth/login';

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const defaultState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export type AuthActions =
  | UserAction
  | UserActionRegistrationTypes
  | UserActionLoginTypes;

export const authReducer = (
  state = defaultState,
  action: AuthActions,
): UserState => {
  switch (action.type) {
    case RegistrationActionTypes.REGISTRATION_START:
    case LoginActionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionTypes.SET_USER:
    case RegistrationActionTypes.REGISTRATION_SUCCESS:
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: action.payload,
      };
    case RegistrationActionTypes.REGISTRATION_FAIL:
    case LoginActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
