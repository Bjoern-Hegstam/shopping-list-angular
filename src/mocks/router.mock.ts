export class RouterMock {
  navigate: jasmine.Spy;

  constructor() {
    this.navigate = jasmine.createSpy();
  }
}
