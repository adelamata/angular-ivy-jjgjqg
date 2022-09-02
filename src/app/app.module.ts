import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponentComponent } from './one-component/one-component.component';
import { InjectableService } from './injectable/injectable.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, OneComponentComponent],
  bootstrap: [AppComponent],
  providers: [InjectableService],
})
export class AppModule {}
