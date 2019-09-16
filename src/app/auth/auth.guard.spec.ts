import { inject, TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

let authServiceMock;
let routerMock;
let guard: AuthGuard;

describe('AuthGuard', () => {
  beforeEach(() => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    guard = new AuthGuard(authServiceMock, routerMock);
  });

  describe('checkLogin', () => {
    it('logged in user', () => {
      authServiceMock.isLoggedIn.and.returnValue(true);

      const canActivate: boolean = guard.canActivate(null, { url: 'redirect-url' });

      expect(canActivate).toBe(true);
    });

    it('not logged in user', () => {
      authServiceMock.isLoggedIn.and.returnValue(false);

      const canActivate: boolean = guard.canActivate(null, { url: 'redirect-url' });

      expect(canActivate).toBe(false);
      expect(authServiceMock.redirectUrl).toBe('redirect-url');
      expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
    });
  });
});
