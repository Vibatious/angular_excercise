import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IProduct';

@Pipe({
  name: 'productsearch'
})
export class ProductsearchPipe implements PipeTransform {

  transform(value: IProduct[],args: string) {
    if(!args){
      console.log(value);
      return value;
    }
    return value.filter(item =>{
      console.log(item.pName.toLowerCase().indexOf('love',1));
       return item.pName.toLowerCase().indexOf(args.toLowerCase()) > -1
    })
  }

}
