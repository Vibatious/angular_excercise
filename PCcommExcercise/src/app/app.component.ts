import { Component } from '@angular/core';
import { productdetail, productData } from './productT';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCcommExcercise';
  itemData:productdetail[] = productData;
}
