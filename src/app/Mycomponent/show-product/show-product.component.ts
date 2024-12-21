import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Product } from '../..//Product';
import { ProductDataTransferService } from '../..//product-data-transfer.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html' ,
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {
  @Input() product: Product | any;
  constructor(private dataTransfer:ProductDataTransferService){
  }
  sendData($event:Product){
    console.log($event)
    this.dataTransfer.reciveData($event);
  }
  onInit(){
  }
}
