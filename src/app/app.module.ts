import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DnnInterceptor } from '@2sic.com/dnn-sxc-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DnnInterceptor, // ensures that HTTP calls are enhanced with DNN-variables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
