import { LoginFlowState, State, stateKey } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectAuthState = createFeatureSelector<State>(stateKey);

export const selectLoginFlowState = createSelector(
  selectAuthState,
  state => ({
    token: state.token,
    loggingIn: state.loggingIn,
    loginError: state.loginError,
  })
);

export const selectAuthToken = createSelector(
  selectAuthState,
  state => state.token,
);
