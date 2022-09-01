import { Component, VERSION } from '@angular/core';
import { Singleton } from './singleton/singleton';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    console.log(Singleton.getInstance());
  }
}
