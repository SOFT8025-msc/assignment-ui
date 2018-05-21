import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerComponent} from './customer.component';
import {CustomerService} from './customer.service';
import { CustomerOptionsComponent } from './customer-options/customer-options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomerComponent,
    CustomerOptionsComponent
  ],
  exports: [
    CustomerComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule {
}
