import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MyComponent } from './my/my.component';
import { MydropdownComponent } from './mydropdown/mydropdown.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, MyComponent, MydropdownComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
