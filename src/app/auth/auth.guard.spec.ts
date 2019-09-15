import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterMock } from "../../mocks/router.mock";
import { Router } from "@angular/router";
import { AuthServiceMock } from "../../mocks/auth.mock";
import { AuthService } from "../auth.service";

let authServiceMock: AuthServiceMock;
let routerMock: RouterMock;

describe('AuthGuard', () => {
  beforeEach(() => {
    authServiceMock = new AuthServiceMock();
    routerMock = new RouterMock();

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
