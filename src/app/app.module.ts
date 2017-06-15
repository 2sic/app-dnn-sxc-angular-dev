import { SxcAngular, SxcHttpProvider } from '@2sic.com/dnn-sxc-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SxcAngular,
    SxcHttpProvider
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
