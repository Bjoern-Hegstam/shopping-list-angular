import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import { AuthenticationResult, initialState, State } from './state';

const authReducer = createReducer(
  initialState,
  on(actions.login, (state) => ({
    ...state,
    loggingIn: true,
    loginError: null,
  })),
  on(actions.loginSuccessful, (state, { token, user }: AuthenticationResult) => ({
    ...state,
    token: { token },
    user,
    loggingIn: false,
  })),
  on(actions.loginFailed, (state) => ({
    ...state,
    loggingIn: false,
    loginError: 'Failed to login',
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
