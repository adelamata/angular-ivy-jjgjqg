export class Singleton {
  private name = 'SingletonInstance' + Math.round(Math.random() + 9);
  private static instance: Singleton;

  static getInstance(): Singleton {
    return this.instance || (this.instance = new Singleton());
  }
}
