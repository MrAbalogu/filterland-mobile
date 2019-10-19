import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LogSaleService {

  private baseUrl: string = "http://localhost:4040/api/v1/sales_invoices";
  // private baseUrl: string = "https://filterland-api.herokuapp.com/api/v1/sales_invoices";

  constructor() {}

  public addSale(sale) {
  	console.log("posting to server....");
  	return this.http.post(`${this.baseUrl}`, sale, { headers: { 'Content-Type': 'application/json' }});
  }

  public getRecentSales(user_id) {
    return this.http.get(`${this.baseUrl}/recent_sales/${user_id}`);
  }

  public syncSalesFromStorage(sales) {
  	console.log("post request");
  	console.log("main params: ", sales);
  	return this.http.post(`${this.baseUrl}/sync_from_storage`, sales, { headers: { 'Content-Type': 'application/json' }})
  }

}