export class Logger {
  static forComponent(name: string) {
    return new Logger(`[Component ${name}]`);
  }

  constructor(private name: string) {}

  debug(msg: string) {
    console.log(`${this.name} ${msg}`);
  }
}
