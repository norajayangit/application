import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client : HttpClient) { }
  getAllProducts(){
    return this.client.get("http://localhost:4000/products")
  }
  getAllelectronics(){
    return this.client.get("http://localhost:4000/electronics")
  }
  getAlljewellary(){
    return this.client.get("http://localhost:4000/jewellary")
  }
  getAllfashion(){
    return this.client.get("http://localhost:4000/fashion")
  }

}
