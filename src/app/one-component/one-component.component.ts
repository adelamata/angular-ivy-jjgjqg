import { Component, Inject } from '@angular/core';
import { MiToken2 } from '../app.module';
import { Singleton } from '../singleton/singleton';

@Component({
  selector: 'app-one-component',
  template: '<h1>one-component</h1>',
  styleUrls: ['./one-component.component.css'],
})
export class OneComponentComponent {
  constructor(
    @Inject('TOKENMIO') tokenmio: number,
    @Inject(MiToken2) tokenmio2: number
  ) {
    console.log(Singleton.getInstance());
    console.log('Mi token', tokenmio);
    console.log('Mi token 2', tokenmio2);
  }
}
