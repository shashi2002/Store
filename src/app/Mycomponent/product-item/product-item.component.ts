import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Product';
import { ProductDataTransferService } from '../../product-data-transfer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() productSelect: EventEmitter<Product> = new EventEmitter();
  type:string | any;
  item:string | any;
  constructor(private activatedRoute:ActivatedRoute, private dataTransfer:ProductDataTransferService){
  }
  sendProduct(product:Product){
    this.productSelect.emit(product);
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe((data: Params)=>{
      this.type=data['type'];
      this.item=data['item'];
    });
  }
}