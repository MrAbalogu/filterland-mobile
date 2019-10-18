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

  public getProducts() {
  	return this.http.get(`http://localhost:4040/api/v1/products`);
  	// return this.http.get(`${this.baseUrl}`);
  }

}