import { DnnInterceptor, DevContext, Context, Data } from '@2sic.com/dnn-sxc-angular';
import { HttpModule } from '@angular/http';
import { HttpHandler, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DnnInterceptor,
    Context,
    Data,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
