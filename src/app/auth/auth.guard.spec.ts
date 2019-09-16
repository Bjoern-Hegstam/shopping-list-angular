import { inject, TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { deepEqual, instance, mock, verify, when } from "ts-mockito";

let authServiceMock: AuthService;
let routerMock: Router;
let guard: AuthGuard;

describe('AuthGuard', () => {
  beforeEach(() => {
    authServiceMock = mock(AuthService);
    routerMock = mock(Router);

    guard = new AuthGuard(
      instance(authServiceMock),
      instance(routerMock)
    );
  });

  describe('checkLogin', () => {
    it('logged in user', () => {
      when(authServiceMock.isLoggedIn()).thenReturn(true);

      const canActivate: boolean = guard.canActivate(null, { url: 'redirect-url' });

      expect(canActivate).toBe(true);
    });

    it('not logged in user', () => {
      when(authServiceMock.isLoggedIn()).thenReturn(false);

      const canActivate: boolean = guard.canActivate(null, { url: 'redirect-url' });

      expect(canActivate).toBe(false);
      expect(instance(authServiceMock).redirectUrl).toBe('redirect-url');
      verify(routerMock.navigate(deepEqual(['/']))).called();
    });
  });
});
