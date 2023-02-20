import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-jewellary',
  templateUrl: './jewellary.component.html',
  styleUrls: ['./jewellary.component.css']
})
export class JewellaryComponent implements OnInit {
  productdata:any
  pos="center";
  constructor(private service:ApiService,private cartService : CartService) { }

  ngOnInit() {
  
  this.service.getAlljewellary().subscribe((data)=> {
  

  
  this.productdata=data;
  this.productdata.forEach((a:any)=>{
    Object.assign(a,{quantity:1,total:a.price});
  
    
  });
  })
  
  }
  
  addtocart(item: any){
   this.cartService.addtoCart(item);
} }