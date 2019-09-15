import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient } from "@angular/common/http";

let httpClientMock: { post: jasmine.Spy };

describe('AuthService', () => {
  beforeEach(() => {
    httpClientMock = {
      post: jasmine.createSpy()
    };

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientMock }]
    });
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
