import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";

let authServiceMock: { login: jasmine.Spy; };

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    authServiceMock = {
      login: jasmine.createSpy()
    };

    TestBed
      .configureTestingModule({
        declarations: [LoginComponent],
        imports: [ReactiveFormsModule],
        providers: [{ provide: AuthService, useValue: authServiceMock }]
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
