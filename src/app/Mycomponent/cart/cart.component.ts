
import { Component } from '@angular/core';
import { Product } from '../../Product';
import { ProductDataTransferService } from '../../product-data-transfer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items!:Product[] | any;
  constructor(private dataTransfer:ProductDataTransferService){}
  ngOnInit(){
    this.items=this.dataTransfer.setProd();
    console.log(this.items);
  }
}
