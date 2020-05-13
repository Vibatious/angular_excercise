import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {productData, productdetail} from '../productT';
@Component({
  selector: 'app-product-show',
  templateUrl: './productshow.component.html',
  styleUrls: ['./productshow.component.css']
})
export class ProductshowComponent implements OnInit {
@Input() singleDataItem:Object;
@Output() cancel : EventEmitter<any> = new EventEmitter();

cancelList(){
this.cancel.emit();
}
  ngOnInit(): void {
  }

}
