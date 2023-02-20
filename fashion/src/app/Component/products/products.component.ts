import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productdata:any
  pos="center";
  constructor(private service:ApiService,private cartService : CartService) { }

  ngOnInit() {
    this.service.getAllProducts().subscribe((data)=>{
      this .productdata=data;
      this.productdata.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      
        
      });
    })
  }
  addtocart(item: any){
     this.cartService.addtoCart(item);
  }
}
