import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CustomerModule} from './customer/customer.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomerModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
