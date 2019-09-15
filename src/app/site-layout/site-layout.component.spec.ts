import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutComponent } from './site-layout.component';
import { Component } from "@angular/core";

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
    TestBed.configureTestingModule({
      declarations: [
        SiteLayoutComponent,
        HeaderStubComponent,
        NavigationStubComponent,
        RouterOutletStubComponent
      ]
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
