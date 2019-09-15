export class AuthServiceMock {
  isLoggedIn: jasmine.Spy;
  login: jasmine.Spy;

  constructor() {
    this.isLoggedIn = jasmine.createSpy();
    this.login = jasmine.createSpy();
  }
}
