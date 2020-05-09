import { Component, ElementRef, TemplateRef, OnInit } from '@angular/core';
import { productdetail, dataProducts } from 'src/dataProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemData:productdetail[];
  leftPreview:string="";
  rightPreview:string="";
  startPrice:number;

  ngOnInit(){
      this.itemData = dataProducts;
  }
  changePreview=(info)=>{

    let time = new Date().getTime();
    this.leftPreview =info.src=dataProducts[info.id-1].frontPreviewUrl;
    this.rightPreview =info.src=dataProducts[info.id-1].backPreviewUrl;
  }

  endPreview=(info)=>{
    this.leftPreview="";
    this.rightPreview="";
    info.src=dataProducts[info.id-1].frontPreviewUrl;
  }
}
