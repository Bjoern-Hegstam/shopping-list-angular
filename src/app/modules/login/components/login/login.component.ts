import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoute } from '../../../../constants/app-routes';
import { select, Store } from '@ngrx/store';
import { AuthStoreActions, AuthStoreSelectors, AuthStoreState, RootStoreState } from '../../../../root-store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from '../../../../logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly logger = Logger.forComponent('LoginComponent');
  loginForm;
  subscriptions$: Subscription[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store$: Store<RootStoreState.State>,
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.subscriptions$ = [
      this.store$
        .pipe(
          select(AuthStoreSelectors.selectLoginFlowState),
          tap((authState: AuthStoreState.LoginFlowState) => {
            if (authState.loggingIn) {
              return;
            }

            if (authState.isLoggedIn) {
              this.logger.debug('Logged in successfully');
              this.router.navigate([AppRoute.LISTS]);
            } else if (authState.loginError) {
              this.logger.debug('Failed to login');
              this.loginForm.enable();
            }
          }))
        .subscribe(),
    ];
  }

  onSubmit({ username, password }) {
    this.loginForm.disable();
    this.store$.dispatch(AuthStoreActions.login({ username, password }));
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }
}
