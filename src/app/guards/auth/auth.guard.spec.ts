import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { deepEqual, instance, mock, verify } from 'ts-mockito';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { AuthStoreSelectors, AuthStoreState } from '../../root-store/auth-store';
import { AppRoute } from '../../constants/app-routes';

describe('AuthGuard', () => {
  let authServiceMock: AuthService;
  let routerMock: Router;
  let guard: AuthGuard;

  let store: MockStore<AuthStoreState.State>;
  let authToken;

  beforeEach(() => {
    authServiceMock = mock(AuthService);
    routerMock = mock(Router);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: instance(authServiceMock) },
        { provide: Router, useValue: instance(routerMock) },
        provideMockStore({
          initialState: {
            auth: {}
          }
        }),
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    authToken = store.overrideSelector(AuthStoreSelectors.selectAuthToken, null);

    guard = TestBed.get(AuthGuard);
  });

  describe('checkLogin', () => {
    it('logged in user', async () => {
      // given
      authToken.setResult('Valid token');

      // when
      const canActivate = await guard.canActivate(null, { url: 'redirect-url' }).toPromise();

      // then
      expect(canActivate).toBe(true);
    });

    it('not logged in user', async () => {
      // given
      authToken.setResult(null);

      // when
      const canActivate = await guard.canActivate(null, { url: 'redirect-url' }).toPromise();

      // then
      expect(canActivate).toBe(false);
      expect(TestBed.get(AuthService).redirectUrl).toBe('redirect-url');
      verify(routerMock.navigate(deepEqual([AppRoute.LOGIN]))).called();
    });
  });
});
