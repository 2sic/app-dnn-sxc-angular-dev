import {SxcHttpProvider} from '../../node_modules/@2sic.com/dnn-sxc-angular/src/sxc-http.provider';
import { ContentResourceFactory, SxcAngular, SxcHttpProviderFactory, SxcAngularModule } from '@2sic.com/dnn-sxc-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestOptions, Http, HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SxcAngularModule
  ],
  providers: [
    SxcAngular,
    ContentResourceFactory,
    SxcHttpProvider,
    {
      provide: Http,
      useFactory: SxcHttpProviderFactory,
      deps: [XHRBackend, RequestOptions, SxcAngular]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }