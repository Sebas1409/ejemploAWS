import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { DashModule } from './dash.module';
import { RouterModule } from '@angular/router';
import { route } from '../route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DashModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
