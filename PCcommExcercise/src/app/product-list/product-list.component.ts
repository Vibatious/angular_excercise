import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { productdetail } from '../productT';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  activeItem:Object;
  show = false;
  @Input('itemDetail') detail:productdetail[];

  // @Output() activeItem :EventEmitter<any> = new EventEmitter();

  activeItemData=(id)=>{
    this.activeItem =  this.detail[parseInt(id)-1];
    this.show=true;
  }

  ngOnInit(): void {
  }

}
