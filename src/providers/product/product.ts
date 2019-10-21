import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  // private baseUrl: string = "http://localhost:4040/api/v1/products";
  private baseUrl: string = "https://filterland-api.herokuapp.com/api/v1/products";

  constructor(
  	private http: HttpClient
  ) {}

  public getProducts() {
  	return this.http.get(`${this.baseUrl}`, { observe: 'response' });
  }

}