import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutComponent } from './site-layout.component';
import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { instance, mock } from "ts-mockito";

let authServiceMock: AuthService;

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent { }

@Component({selector: 'app-navigation', template: ''})
class NavigationStubComponent { }

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

describe('SiteLayoutComponent', () => {
  let component: SiteLayoutComponent;
  let fixture: ComponentFixture<SiteLayoutComponent>;

  beforeEach(async(() => {
    authServiceMock = mock(AuthService);

    TestBed.configureTestingModule({
      declarations: [
        SiteLayoutComponent,
        HeaderStubComponent,
        NavigationStubComponent,
        RouterOutletStubComponent
      ],
      providers: [{ provide: AuthService, useValue: instance(authServiceMock) }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
