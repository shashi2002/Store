import { Injectable } from '@angular/core';
// import { Product } from '../../../frontEnd/src/app/Product';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductDataTransferService {
  product :Product[] = [{
    name:"LookMark Men's Poly Cotton Digital Printed ",
    brand:"LookMark store",
    desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
    img:"https://m.media-amazon.com/images/I/717Qr4ImV+L._AC_UL600_FMwebp_QL65_.jpg",
    price:45.8,
    type:"cloth",
  },
  {
    name:"US Polo Association Mens Abor Sneakers",
    brand:"US Polo Association",
    desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
    img:"https://m.media-amazon.com/images/I/71m+EGqdJ0L._AC_UL600_FMwebp_QL65_.jpg",
    price:13.00,
    type:"shoe",
  },
  {
    name:"WSYUB Spa headband",
    brand:"WSYUB",
    desc:"Face wash headband and wristband set: Package included 1pcs headband and 2pcs wristband in purple color, the headband can avoid hair from falling in front of your face",
    img:"https://m.media-amazon.com/images/I/71Gj22LXyqL._AC_SX679_.jpg",
    price:2.00,
    type:"accessories",
  },
  ];
  len!:number;
  clothings: Product[] | any;
  shoes:Product[] | any;
  accessories:Product|any;
  
  constructor() {
    this.len=0
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
    this.shoes = [
      {
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
    },
  ];
    this.accessories=[
      {
        name:"WSYUB Spa headband",
        brand:"WSYUB",
        desc:"Face wash headband and wristband set: Package included 1pcs headband and 2pcs wristband in purple color, the headband can avoid hair from falling in front of your face",
        img:"https://m.media-amazon.com/images/I/71Gj22LXyqL._AC_SX679_.jpg",
        price:2.00,
        type:"accessories",
      },
      {
        name:"4 Piece African Yoga Headband",
        brand:"WILLBOND",
        desc:"What you receive: you will receive 4 pieces African print headbands in different patterns, can be matched with different styles of outfits",
        img:"https://m.media-amazon.com/images/I/81cbBGsW4dS._AC_SX679_.jpg",
        price:38.50,
        type:"accessories",
      },
      {
        name:"Men's Premium Black Genuine Leather Bracelet",
        brand:"SERASAR",
        desc:"STYLE - The black leather bracelet is the ideal accessory to complete any outfit. Its eye-catching, elegant design with the braided leather makes it suitable for any occasion and definitely attracts attention",
        img:"https://m.media-amazon.com/images/I/71GhLB9OVGL._AC_SX679_.jpg",
        price:20.31,
        type:"accessories",
      },
      {
        name:"10 Pieces 1920s Flapper Great Gatsby Accessories Set Fashion",
        brand:"ELECLAND",
        desc:"Package includes：total 10 pieces：1 pair black long gloves(2pcs); 1 pair earrings(2pcs); 1 pcs pearl necklace; 1 pcs great gatsby handheld props; 1 pcs flapper headband; 1 pcs artificial pearl bracelet; 1 pair fishnet tights; 1pcs shawl; NECKLACE AND BRACELET HAVE　DIFFERENT COLORS",
        img:"https://m.media-amazon.com/images/I/71+jQfYebeL._AC_SX679_.jpg",
        price:40.60,
        type:"accessories",
      },
      {
        name:"T-Bar Headband Holder Organizer for Selling",
        brand:"Justsoso",
        desc:"Ice Beige Soft luxurious flannelette make comfortable to touch and keep your hairband accessories not easy to slide, is not only a display stand also a beatiful arts and crafts.",
        img:"https://m.media-amazon.com/images/I/71YaTmfbPOL._AC_SX679_.jpg",
        price:21.99,
        type:"accessories",
      },
      {
        name:"Women 18K Gold Plated Small Cubic Zirconia Stud Earrings",
        brand:"FanLeClair",
        desc:"【Material】These gold stud earrings made of brass, nickel-free, hypoallergenic, lightweight and comfortable to wear for sensitive ears all day long.",
        img:"https://m.media-amazon.com/images/I/613dmA3GIVL._AC_SY879_.jpg",
        price:99.87,
        type:"accessories",
      },
      {
        name:"925 Sterling Silver Cross Pendant",
        brand:"FanLeClair",
        desc:"The necklace made of 925 sterling silver with a high quality white gold, AAAA cubic zirconia, color will last a long time without tarnish. Nickel-free, lead-free, cadmium-free and hypoallergenic. It does not cause damage to sensitive skin.",
        img:"https://m.media-amazon.com/images/I/51bkmF-S1CL._AC_SX679_.jpg",
        price:18.76,
        type:"accessories",
      },
      {
        name:"Women 18K Gold Plated Stud Earrings",
        brand:"FanLeClair",
        desc:"【Material】These gold stud earrings made of brass, S925 sterling silver pins, nickel-free, hypoallergenic, lightweight and comfortable to wear for sensitive ears all day long.",
        img:"https://m.media-amazon.com/images/I/71qVlDzb4HL._AC_SY879_.jpg",
        price:87.90,
        type:"accessories",
      },
      {
        name:"Double Layer Pearl Beaded Headbands Hair Hoops Bridal Hairband",
        brand:"E EMZHOLE",
        desc:"【Quality Material】This frame of jeweled headbands for women is made of strong alloy, faux pearls, indicating a smooth and bright, smooth round head, avoid scratching the scalp when wearing it.",
        img:"https://m.media-amazon.com/images/I/51avbQHpysL._AC_SX679_.jpg",
        price:15.70,
        type:"accessories",
      },
      {
        name:"Sunglasses ONE for Men and Women",
        brand:"HAWKERS",
        desc:"Sunglasses made of Swiss TR90 certified by EMS considered the best nylon in the world for eyewear frames providing more flexibility and re",
        img:"https://m.media-amazon.com/images/I/61I6gg-RubL._AC_SY695_.jpg",
        price:50.60,
        type:"accessories",
      },
      {
        name:"Princess Style Jewellery Box from Netherlands",
        brand:"Vlando",
        desc:"【 Considerate Details 】The jewelry case with glossy metal clasp is effortless to close and open. PU Leather interior soft velvet lining protects your jewelry from dust or scratches. The jewelry storage with neat stitching can stand heavy jewelry cosmetic well and enough for your ever-growing jewelry collection",
        img:"https://m.media-amazon.com/images/I/71IwRp8Wc7L._AC_SX679_.jpg",
        price:35.41,
        type:"accessories",
      },
      {
        name:"Vintage Baseball Cap Mens Peak Embroidery Baseball Hat",
        brand:"YULOONG",
        desc:"[Adjustable size] The back of the baseball cap can adjust the head circumference 56-61cm (22.04-24.01 inches) by high-quality vintage metal adjustment buckle, the cap is suitable for men and women with general head circumferences.",
        img:"https://m.media-amazon.com/images/I/61p5v4ORH2L._AC_SX679_.jpg",
        price:19.99,
        type:"accessories",
      },
    ]
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


