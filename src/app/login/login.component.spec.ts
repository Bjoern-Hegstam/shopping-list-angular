import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { anything, deepEqual, instance, mock, verify, when } from "ts-mockito";

let authServiceMock: AuthService;
let routerMock: Router;

describe('LoginComponent', () => {
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
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('on init', () => {
    it('redirects logged in user', () => {
      when(authServiceMock.isLoggedIn()).thenReturn(true);

      component.ngOnInit();

      verify(routerMock.navigate(deepEqual(['lists']))).called();
      expect().nothing(); // Suppress Karma warning "spec has no expectations"
    });

    it('does not redirect not logged in user', () => {
      when(authServiceMock.isLoggedIn()).thenReturn(false);

      component.ngOnInit();

      verify(routerMock.navigate(anything())).never();
      expect().nothing(); // Suppress Karma warning "spec has no expectations"
    });
  });
});
