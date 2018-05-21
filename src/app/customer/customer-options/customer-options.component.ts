import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer.model';

@Component({
  selector: 'app-customer-options',
  templateUrl: './customer-options.component.html',
  styleUrls: ['./customer-options.component.css']
})
export class CustomerOptionsComponent {

  @Input() customer: Customer;
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  constructor(private service: CustomerService) {
  }

  deleteCustomer() {
    this.service.deleteCustomer(this.customer).subscribe(() => this.onDelete.emit());
  }

  updateCustomer() {
    this.service.updateCustomer(this.customer).subscribe(() => this.onUpdate.emit());
  }

}
