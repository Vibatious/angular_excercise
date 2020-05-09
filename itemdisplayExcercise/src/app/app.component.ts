import { Component } from '@angular/core';
import { productdetail, dataProducts } from 'src/dataProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemData:productdetail[] = dataProducts;

  changePreview=(info)=>{
    console.log(info)
    // info.src = dataProducts[info.id].backPreviewUrl;
  }
}
