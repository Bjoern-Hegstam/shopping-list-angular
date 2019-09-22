import { AuthStoreState } from '../root-store/auth-store';

export const isValidToken = (token: AuthStoreState.Token): boolean => !!token;
