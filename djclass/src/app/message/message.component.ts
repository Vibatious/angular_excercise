import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

const template = `<h2 class="text-center">{{message}}</h2>
                  <p>{{count}}</p>
                  <button (click)="abc()" class="btn btn-info">Pass to Parent</button>`;

@Component({
  selector: 'app-message',
  template : template
})

export class MessageComponent implements OnInit, OnChanges {
  @Input() count:any;
  @Input() message:string;
  @Output() sendSignaltoParent:EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('c');
   }

   abc=()=>{
     this.sendSignaltoParent.emit(" I am passing the data");
   }
  ngOnInit(){
    console.log('init');
  }
  ngOnChanges(){
    if(this.count>25){
      alert('hey')
    }
    console.log('change');
  }


}
