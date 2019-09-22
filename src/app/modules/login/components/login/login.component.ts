import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoute } from '../../../../constants/app-routes';
import { select, Store } from '@ngrx/store';
import { AuthStoreActions, AuthStoreSelectors, AuthStoreState } from '../../../../root-store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from '../../../../util/logger';
import { AuthService } from '../../../../services/auth.service';
import { isValidToken } from '../../../../util/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly logger = Logger.forComponent('LoginComponent');
  private loginForm;
  private subscriptions$: Subscription[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store$: Store<AuthStoreState.State>,
    private authService: AuthService,
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

            if (isValidToken(authState.token)) {
              this.logger.debug('Logged in successfully');
              if (this.authService.redirectUrl) {
                this.logger.debug(`Redirecting to ${this.authService.redirectUrl}`);
                this.router.navigate([this.authService.redirectUrl]);
              } else {
                this.logger.debug(`Redirecting to [${AppRoute.LISTS}]`);
                this.router.navigate([AppRoute.LISTS]);
              }
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
