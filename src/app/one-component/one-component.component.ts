import { Component } from '@angular/core';
import { Singleton } from '../singleton/singleton';

@Component({
  selector: 'app-one-component',
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css'],
})
export class OneComponentComponent {
  constructor() {
    console.log(Singleton.getInstance());
  }
}
