export const stateKey = 'auth';

export interface State {
  token: string | null;
  user: User | null;
  loggingIn: boolean;
  loginError: string | null;
}

export const initialState: State = {
  token: null,
  user: null,

  loggingIn: false,
  loginError: null,
};

export interface LoginFlowState {
  isLoggedIn: boolean;
  loggingIn: boolean;
  loginError: string | null;
}

export interface AuthenticationState {
  isAuthenticated: boolean;
}

export class User {
  id: string;
  role: 'USER' | 'ADMIN';
  username: string;
}

export class AuthenticationResult {
  token: string;
  user: User;
}
