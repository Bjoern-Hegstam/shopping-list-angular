import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

let authServiceMock;
let routerMock;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['isLoggedIn', 'login']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
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

  describe('on init', () => {
    it('redirects logged in user', () => {
      authServiceMock.isLoggedIn.and.returnValue(true);

      component.ngOnInit();

      expect(routerMock.navigate).toHaveBeenCalledWith(['lists']);
    });

    it('does not redirect not logged in user', () => {
      authServiceMock.isLoggedIn.and.returnValue(false);

      component.ngOnInit();

      expect(routerMock.navigate).not.toHaveBeenCalled();
    });
  });
});
