import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    return this.http.get<Customer[]>('/customers/list');
  }

  deleteCustomer(customer: Customer) {
    return this.http.delete(`/customers/delete/${customer.id}`);
  }

  updateCustomer(customer: Customer) {
    return this.http.post(`customers/update/${customer.id}`, customer);
  }
}
