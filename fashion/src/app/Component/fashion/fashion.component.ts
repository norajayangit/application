import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  productdata:any
  pos="center";
  constructor(private service:ApiService,private cartService : CartService) { }

  ngOnInit() {
  
  this.service.getAllfashion().subscribe((data)=> {
  
  //console.log(data);
  
  this.productdata=data;
  this.productdata.forEach((a:any)=>{
    Object.assign(a,{quantity:1,total:a.price});
  
    
  });
  
  })
  
  }
  addtocart(item: any){
   this.cartService.addtoCart(item);
} }
