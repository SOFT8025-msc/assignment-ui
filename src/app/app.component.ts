import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'https://customer-ms-java.herokuapp.com/customers/list';
  data: any = [];

  constructor(private http: HttpClient) {
    console.log('I hope this call works');
    this.getData();
    console.log(this.data);
  }

  getData() {
    return this.http.get(this.apiUrl).subscribe((res) => {
      this.data = res;
    });
  }
}
