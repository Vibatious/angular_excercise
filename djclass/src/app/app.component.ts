import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'djclass class2';
  products: IProduct[] = [];
  imageWidth:number = 50;
  imageMargin:number = 30;
  showImage = false;
  searchtext:string="";

  toggleImage=()=>{
    this.showImage = !this.showImage;
  }
  ngOnInit(){
    this.products = this.getProducts();
    console.log(this.products);
  }
  getProducts() : IProduct[]{
       return [
         {
          productId:1,
          pName:"Love",
          pCode:"fhhd",
          rDate:"March 19",
          price:96,
          des:"Loose Weight",
          starRating:3.9,
          imageUrl:""
         },
         {
          productId:2,
          pName:"Kush",
          pCode:"fhhd",
          rDate:"March 19",
          price:96,
          des:"Loose Weight",
          starRating:3.9,
          imageUrl:""
         },
         {
          productId:3,
          pName:"rajp",
          pCode:"fhhd",
          rDate:"March 19",
          price:96,
          des:"Loose Weight",
          starRating:3.9,
          imageUrl:""
         }
       ]
  }


}
