import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";
import { AuthServiceMock } from "../../mocks/auth.mock";
import { Router } from "@angular/router";
import { RouterMock } from "../../mocks/router.mock";

let authServiceMock: AuthServiceMock;
let routerMock: RouterMock;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    authServiceMock = new AuthServiceMock();
    routerMock = new RouterMock();

    TestBed
      .configureTestingModule({
        declarations: [LoginComponent],
        imports: [ReactiveFormsModule],
        providers: [
          { provide: AuthService, useValue: authServiceMock },
          { provide: Router, useValue: routerMock },
        ]
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
