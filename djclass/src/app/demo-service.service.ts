import { Injectable } from '@angular/core';

@Injectable()
export class DemoServiceService {
  private static count = 0;
  data:String;
  constructor() {
    DemoServiceService.count = DemoServiceService.count+1;
    console.log(DemoServiceService.count);
   }

   get(data:string){
     console.log(data);
   }
   ngOnInit():void{

   }

}
