export const stateKey = 'auth';

export interface State {
  token: Token | null;
  user: User | null;
  loggingIn: boolean;
  loginError: string | null;
}

export interface Token {
  token: string;
}

export const initialState: State = {
  token: null,
  user: null,

  loggingIn: false,
  loginError: null,
};

export interface LoginFlowState {
  token: Token | null;
  loggingIn: boolean;
  loginError: string | null;
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
