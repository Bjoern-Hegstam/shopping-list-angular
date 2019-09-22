import { createAction, props } from '@ngrx/store';
import { AuthenticationResult } from './state';

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL',
  LOGIN_FAILED = 'LOGIN_FAILED',

  LOGOUT = 'LOGOUT',
}

export const login = createAction(ActionTypes.LOGIN, props<{ username: string, password: string }>());
export const loginSuccessful = createAction(ActionTypes.LOGIN_SUCCESSFUL, props<AuthenticationResult>());
export const loginFailed = createAction(ActionTypes.LOGIN_FAILED, props<{ error }>());

export const logout = createAction(ActionTypes.LOGOUT);
