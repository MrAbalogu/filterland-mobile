import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCustomer } from "../../models/customer";

@Injectable()
export class CustomerService {

  private baseUrl: string = "http://localhost:4040/api/v1/customers";
  // private baseUrl: string = "https://filterland-api.herokuapp.com/api/v1/customers";

  constructor(
    private http: HttpClient
  ) {}

  public addCustomer(customerDetails: AddCustomer) {
  	return this.http.post(`${this.baseUrl}`, customerDetails, { observe: 'response' });
  }

  public fetchCustomers(user_id) {
    console.log("fetching customers... for ", user_id);
    return this.http.get(`${this.baseUrl}/my_customers/${user_id}`, { observe: 'response' });
  }

  public syncCustomersFromStorage(customers) {
  	console.log("post request");
  	console.log("main params: ", customers);
  	return this.http.post(`${this.baseUrl}/sync_from_storage`, customers, { headers: { 'Content-Type': 'application/json' }})
  }

}