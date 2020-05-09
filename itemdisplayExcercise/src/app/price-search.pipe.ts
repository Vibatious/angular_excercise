import { Pipe, PipeTransform } from '@angular/core';
import { productdetail } from 'src/dataProduct';

@Pipe({
  name: 'priceSearch'
})
export class PriceSearchPipe implements PipeTransform {

  transform(value: productdetail[], args: number): unknown {
    if(!args){
      return value;
    }
    return value.filter(item=>{return item.price >= args;})
  }

}
