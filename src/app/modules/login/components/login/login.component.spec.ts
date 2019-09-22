import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { anything, deepEqual, instance, mock, verify } from 'ts-mockito';
import { AuthStoreSelectors, AuthStoreState } from '../../../../root-store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('LoginComponent', () => {
  let authServiceMock: AuthService;
  let routerMock: Router;

  let store: MockStore<AuthStoreState.State>;
  let loginFlowState;

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    authServiceMock = mock(AuthService);
    routerMock = mock(Router);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: instance(authServiceMock) },
        { provide: Router, useValue: instance(routerMock) },
        provideMockStore({
          initialState: {
            [AuthStoreState.stateKey]: AuthStoreState.initialState,
          },
        }),
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    loginFlowState = store.overrideSelector(AuthStoreSelectors.selectLoginFlowState, {});

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('handles successful login', () => {
    // given
    loginFlowState.setResult({
      token: {
        token: 'validToken',
      },
      loggingIn: false,
      loginError: null,
    });

    // when
    component.ngOnInit();

    // then
    verify(routerMock.navigate(deepEqual(['lists']))).called();
    expect().nothing(); // Suppress Karma warning "spec has no expectations"
  });

  it('handles failure to login', () => {
    // given
    loginFlowState.setResult({
      token: null,
      loggingIn: false,
      loginError: 'Failed to login',
    });

    // when
    component.ngOnInit();

    // then
    verify(routerMock.navigate(anything())).never();
    expect().nothing(); // Suppress Karma warning "spec has no expectations"
  });
});
