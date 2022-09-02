import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponentComponent } from './one-component/one-component.component';
import { InjectableService } from './injectable/injectable.service';

export const MiToken2 = new InjectionToken<number>('TOKENMIO2');

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, OneComponentComponent],
  bootstrap: [AppComponent],
  providers: [
    InjectableService,
    { provide: 'TOKENMIO', useValue: 2 },
    { provide: MiToken2, useValue: 3 },
  ],
})
export class AppModule {
  constructor() {
    console.log(this);
  }
}
