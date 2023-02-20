import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
 public products : any = [];
 public grandTotal : number = 0;
 
  constructor(private cartService : CartService) { }

  ngOnInit(): void { 
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
removeItem(item:any){
  this.cartService.removeCartItem(item);
}
emptycart(){
  this.cartService.removeAllCart();
}

}
