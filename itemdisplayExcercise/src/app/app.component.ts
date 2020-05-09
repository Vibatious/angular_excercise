import { Component } from '@angular/core';
import { productdetail, dataProducts } from 'src/dataProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemData:productdetail[] = dataProducts;
  sidePreview:string="";


  changePreview=(info)=>{
    setInterval(()=>{
      this.changePreview(info);
    },1000)

  }

  endPreview=(info)=>{
    this.sidePreview="";
    info.src=dataProducts[info.id-1].frontPreviewUrl;
  }
}
