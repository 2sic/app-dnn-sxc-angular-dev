import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person/person-list.component'
import { PersonComponent } from './person/person.component'
import { HttpClientModule } from '@angular/common/http';
import { DnnInterceptor } from '@2sic.com/dnn-sxc-angular';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import the HttpClientModule in order to request 2sxc data
  ],
  providers: [
    DnnInterceptor, //  ensures that HTTP calls are enhanced with DNN-variables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
