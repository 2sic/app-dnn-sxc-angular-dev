import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person/person-list.component';
import { PersonComponent } from './person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { DnnInterceptor } from '@2sic.com/dnn-sxc-angular';
import { RuntimeSettings } from '@2sic.com/dnn-sxc-angular';
import { DnnDevSettings } from './dev/dnn-dev-settings';

const providers: Provider[] = [
  DnnInterceptor
];

if (!environment.production) {
  providers.push({ provide: RuntimeSettings, useValue: DnnDevSettings });
}

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
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
