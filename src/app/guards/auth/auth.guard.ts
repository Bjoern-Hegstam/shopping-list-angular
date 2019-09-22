import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { select, Store } from '@ngrx/store';
import { AuthStoreSelectors, RootStoreState } from '../../root-store';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppRoute } from '../../constants/app-routes';
import { isValidToken } from '../../util/auth';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store$: Store<RootStoreState.State>,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot | { url: string }): Observable<boolean> {
    return this.checkLogin(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot | { url: string }): Observable<boolean> {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): Observable<boolean> {
    return this
      .store$
      .pipe(
        select(AuthStoreSelectors.selectAuthToken),
        take(1),
        map(token => {
          const isValid = isValidToken(token);
          if (!isValid) {
            this.authService.redirectUrl = url; // Store the attempted URL for redirecting
            this.router.navigate([AppRoute.LOGIN]);
          }
          return isValid;
        }),
      );
  }
}
