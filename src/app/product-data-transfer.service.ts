import { Injectable } from '@angular/core';
// import { Product } from '../../../frontEnd/src/app/Product';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductDataTransferService {
  product!:Product[];
  clothings: Product[] | any;
  shoes:Product[] | any;
  accessories:Product|any;
  constructor() {
    this.clothings=[
      {
        name:"EYEBOGLER Regular Men's Cotton Designer T-Shirt",
        brand:"EYEBOGLER store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/51erlDVGq1L._AC_UL600_FMwebp_QL65_.jpg",
        price:17.00,
        type:"cloth",
      },
      {
        name:"DHRUVI TRENDZ Men Simple Shirt for Men",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/61E+biE5SIL._AC_UL600_FMwebp_QL65_.jpg",
        price:23.58,
        type:"cloth",
      },
      {
        name:"LookMark Men's Poly Cotton Digital Printed ",
        brand:"LookMark store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/717Qr4ImV+L._AC_UL600_FMwebp_QL65_.jpg",
        price:45.8,
        type:"cloth",
      },
      {
        name:"DHRUVI TRENDZ Men Fancy Shirts",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71z2V6TgeoL._AC_UL600_FMwebp_QL65_.jpg",
        price:12.67,
        type:'cloth',
      },
      {
        name:"DENIMHOLIC Men's Cotton Turtle Neck Sweater",
        brand:"DENIMHOLIC store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL600_QL65_.jpg",
        price:19.28,
        type:'cloth',
      },
      {
        name:"Leriya Fashion Shirt for Men",
        brand:"Leriya Fashion",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/51RthiG0RFL._AC_UL600_QL65_.jpg",
        price:2.78,
        type:'cloth',
      },
      {
        name:"NEVER LOSE Mens 2 Pack Polyester Yoga Short Men ",
        brand:"NEVER LOSE store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/31ESWFjUO9L._AC_UL600_QL65_.jpg",
        price:21.78,
        type:'cloth',
      },
      {
        name:"DHRUVI TRENDZ Men Pajama Set",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/61k-h8Q2C1L._AC_UL600_QL65_.jpg",
        price:30.00,
        type:'cloth',
      },
      {
        name:"BoldFit Winter Wear for Women and Men ",
        brand:"BoldFit",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71PgXiVK43L._AC_UL600_QL65_.jpg",
        price:12.78,
        type:'cloth',
      },
      {
        name:"SHAUN Men's Regular Fit Trackapant and Joggers",
        brand:"SHAUN store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/7166+Wcj6AL._AC_UL600_QL65_.jpg"/*pant*/,
        price:18.28,
        type:'cloth',
      },
      {
        name:"Zexer Men Men Compression T-Shirt Gym ",
        brand:"Zexer",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/51gLonI8VsL._AC_UL600_QL65_.jpg",
        price:18.12,
        type:'cloth',
      },
      {
        name:"DHRUVI TRENDZ Men Fancy Shirts for Men",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71ShBw4g6GL._AC_UL600_QL65_.jpg",
        price:12.78,
        type:'cloth',
      },
    ];
    this.shoes = [{
      name:"Sparx Mens Sd0734g Sneaker",
      brand:"Sparx",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61++1-R25gL._UX695_.jpg",
      price:12.74,
      type:"shoe",
    },{
      name:"Adidas Vs Pace 2.0 Men Casual Sneakers",
      brand:"Adidas",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71gJHCfnjAL._UX695_.jpg",
      price:38.40,
      type:"shoe",
  
    },{
      name:"US Polo Association Mens Abor Sneakers",
      brand:"US Polo Association",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71m+EGqdJ0L._AC_UL600_FMwebp_QL65_.jpg",
      price:13.00,
      type:"shoe",
    },{
      name:"Centrino Mens 3323-23 Sneaker",
      brand:"Centrino",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/711W65Z86aL._UY695_.jpg",
      price:25.00,
      type:"shoe",
    },{
      name:"Puma Mens Melanite Slip on Walking Shoe",
      brand:"Puma",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61fOIETsTIL._UY695_.jpg",
      price:34.89,
      type:"shoe",
    },{
      name:"Bacca Bucci Sneakers Shoes for Mens",
      brand:"Bacca Bucci",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71z74kEjLbS._AC_UL600_FMwebp_QL65_.jpg",
      price:45.81,
      type:"shoe",
    },{
      name:"Layasa Men's Sneakers Walking Shoe",
      brand:"Layasa",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/51pZCX2R3XL._UY695_.jpg",
      price:14.00,
      type:"shoe",
    },{
      name:"Red Tape Sneaker Casual Shoes for Men",
      brand:"Red Tape",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61R9kxi3VBL._UY625_.jpg",
      price:16.90,
      type:"shoe",
    },{
      name:"Woodland Men's Leather Casual Shoes",
      brand:"Woodland",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/81VyD3YqX4L._UX695_.jpg",
      price:29.00,
      type:"shoe",
    },{
      name:"U.S. POLO ASSN. Mens Kenna Sneaker",
      brand:"U.S. POLO ASSN",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/810D7hspHqL._UY695_.jpg",
      price:55.00,
      type:"shoe",
    },{
      name:"ASICS Men's Gel-Quantum 180 VII Black",
      brand:"ASICS",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61PyPnlpcVL._UX695_.jpg",
      price:105.60,
      type:"shoe",
    },{
      name:"U.S. POLO ASSN. Mens Erland 2.0 Sneaker",
      brand:"U.S. POLO ASSN",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71JLBrXFhCL._UY695_.jpg",
      price:40.54,
      type:"shoe",
    },];
   }
  displayprod($event: string){
    if($event=='cloths'){
      return this.clothings;
    }
    else if($event=='shoes'){
      return this.shoes;
    }
    else{
      return this.accessories
    }
  }
  reciveData($event:Product){
    this.product.push($event);
  }
  setProd(){
    return this.product;
  }
}
