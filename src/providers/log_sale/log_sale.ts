import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LogSaleService {

  private baseUrl: string = "http://localhost:4040/api/v1/sales_invoices";
  // private baseUrl: string = "https://filterland-api.herokuapp.com/api/v1/sales_invoices";

  constructor(
    private http: HttpClient
  ) {}

  public addSale(sale) {
  	console.log("posting to server....");
  	return this.http.post(`${this.baseUrl}`, sale, { headers: { 'Content-Type': 'application/json' }});
  }

  public getRecentSales(user_id) {
    return this.http.get(`${this.baseUrl}/recent_sales/${user_id}`, { observe: 'response' });
  }

  public getRecentOrders(user_id) {
    return this.http.get(`${this.baseUrl}/recent_orders/${user_id}`, { observe: 'response' });
  }

  public syncSalesFromStorage(sales) {
  	console.log("post request");
  	console.log("main params: ", sales);
  	return this.http.post(`${this.baseUrl}/sync_from_storage`, sales, { headers: { 'Content-Type': 'application/json' }})
  }

}