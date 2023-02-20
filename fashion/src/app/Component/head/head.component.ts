import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  public totalItem : number =0;
  constructor(private cartServices : CartService) { }

  ngOnInit(): void {
    this.cartServices.getProducts()
    .subscribe(res=>{
     this.totalItem = res.length;
    })
  }

}
