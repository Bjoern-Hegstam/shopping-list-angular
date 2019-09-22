import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actions from './actions';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';

@Injectable()
export class AuthStoreEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {
  }

  @Effect()
  loginEffect$: Observable<Action> = this.actions$.pipe(
    ofType(actions.login),
    concatMap(action => this.apiService
      .login(action.username, action.password)
      .pipe(
        map(result => actions.loginSuccessful(result)),
        catchError(error => of(actions.loginFailed(error)))
      )
    )
  );
}
