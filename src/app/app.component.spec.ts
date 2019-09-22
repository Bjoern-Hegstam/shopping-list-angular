import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { instance, mock } from 'ts-mockito';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';

let authServiceMock: AuthService;

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent {
}

@Component({ selector: 'app-navigation', template: '' })
class NavigationStubComponent {
}

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    authServiceMock = mock(AuthService);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        NavigationStubComponent,
        RouterOutletStubComponent
      ],
      providers: [
        { provide: AuthService, useValue: instance(authServiceMock) },
        provideMockStore({
          initialState: {
            auth: {},
          }
        }),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
