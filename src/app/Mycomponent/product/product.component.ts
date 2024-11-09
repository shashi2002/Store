import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../Product'; 
import { ProductDataTransferService } from '../../product-data-transfer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // clothings: Product[] | any;
  // shoes:Product[] | any;
  sProduct: boolean = false;
  vproduct: Product[] | any;
  show:Product[] | any;
  type:string|any;
  showEvent(product: Product){
    this.vproduct = product;
    this.sProduct=true;
  }
  
  ngOnInit():void{
    this.activatedRoute.params.subscribe((data: Params)=>{
      this.type= data['type'];
      this.show=this.data1.displayprod(this.type);
    });
  }
  // @Input() product: Product | undefined;
  constructor(private activatedRoute:ActivatedRoute,private data1:ProductDataTransferService){}
}