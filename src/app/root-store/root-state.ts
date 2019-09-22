import { AuthStoreState } from './auth-store';

export interface State {
  [AuthStoreState.stateKey]: AuthStoreState.State;
}
