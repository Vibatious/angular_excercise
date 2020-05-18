import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

const template = `<h2 class="text-center">{{message}}</h2>
                  <p>{{count}}</p>
                  <button (click)="abc()" class="btn btn-info">Pass to Parent</button>`;

@Component({
  selector: 'app-message',
  template : template,
})

export class MessageComponent implements OnInit, OnChanges {
  msg:string;
  @Input() count:any;
  @Input() message:string;
  @Output() sendSignaltoParent:EventEmitter<any> = new EventEmitter();

  constructor(private denoService:DemoServiceService) {

   }

   abc=()=>{
     this.sendSignaltoParent.emit(" I am passing the data");
   }
  ngOnInit(){
     this.denoService.get('child2')
  }
  ngOnChanges(){
    if(this.count>25){
      alert('hey')
    }
    console.log('change');
  }


}
