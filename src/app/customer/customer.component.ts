import {Component, OnInit} from '@angular/core';
import {CustomerService} from './customer.service';
import {Customer} from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private service: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.service.getCustomers().subscribe((customers) => this.customers = customers);
  }

}
