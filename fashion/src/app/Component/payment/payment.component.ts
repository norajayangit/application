import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public products : any = [];
  mage="vbn";
  
  constructor(private cartService : CartService ,private http:HttpClient) { }
  message=" ";
  
  pos="center";
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      
    })
    
  }
  changeMessage(){
  
    this.message="YOUR ORDER HAS BEEN PLACED!!";
  
  }
  sign(){
    this.http.post<any>("http://localhost:4000/history",this.products.value)
    .subscribe((res)=>{
      alert("success");
      
    })
     
    }
  }

