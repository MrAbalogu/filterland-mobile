import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from "../../models/customer";
import { AddCustomer } from "../../models/customer";
import { Storage } from '@ionic/storage';

const CUSTOMER = 'customer';

@Injectable()
export class CustomerService {

  private baseUrl: string = "https://filterland-api.herokuapp.com/api/v1/customers";

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {}

  public addCustomer(customerDetails: AddCustomer) {
  	return this.http.post(`${this.baseUrl}`, customerDetails, { observe: 'response' })
  	.toPromise()
	.then((customer) => {
	  this.storage.set(CUSTOMER, customer);
	  if (customer) {
	  	console.log("customer: " + customer)
	  }
	  return customer;
	})
	.then(() => {
	  return Promise.resolve();
	})
	.catch((error: HttpErrorResponse) => {
	  console.log(error);
	  return Promise.reject(error.statusText);
	});
  }

}