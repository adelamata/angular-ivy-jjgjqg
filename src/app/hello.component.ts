import { Component, Input } from '@angular/core';
import { Singleton } from './singleton/singleton';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  constructor() {
    console.log(Singleton.getInstance());
  }
}
