import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Context, Data, DnnInterceptor } from '@2sic.com/dnn-sxc-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
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
