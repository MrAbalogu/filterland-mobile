import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Sale } from "../../models/sale";
// import { AddSale } from "../../models/sale";
import { Storage } from '@ionic/storage';

@Injectable()
export class LogSaleService {

  private baseUrl: string = "https://filterland-api.herokuapp.com/api/v1/sales_invoices";

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) {}

  public addSale(sale) {
  	console.log("posting to server....");
  	return this.http.post(`http://localhost:4040/api/v1/sales_invoices`, sale, { headers: { 'Content-Type': 'application/json' }})
  	// return this.http.post(`${this.baseUrl}`, customerDetails, { observe: 'response' });
  }

  public syncSalesFromStorage(sales) {
  	console.log("post request");
  	console.log("main params: ", sales);
  	return this.http.post(`http://localhost:4040/api/v1/sales_invoice/sync_from_storage`, sales, { headers: { 'Content-Type': 'application/json' }})
  	// return this.http.post(`${this.baseUrl}/sync_from_storage`, customers, { observe: 'response' })
  }

}