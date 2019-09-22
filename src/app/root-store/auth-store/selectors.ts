import { AuthenticationState, LoginFlowState, stateKey } from './state';

export const selectLoginFlowState = (state): LoginFlowState => {
  // createSelector not used to avoid memoization as token validity is time dependent
  const authState = state[stateKey];
  return ({
    isLoggedIn: isValidToken(authState.token),
    loggingIn: authState.loggingIn,
    loginError: authState.loginError,
  });
};

export const selectIsAuthenticated = (state): AuthenticationState => {
  // createSelector not used to avoid memoization as token validity is time dependent
  const authState = state[stateKey];
  return ({
    isAuthenticated: isValidToken(authState.token),
  });
};

function isValidToken(token) {
  // TODO: Validate token
  return !!token;
}
