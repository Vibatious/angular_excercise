import { Component, OnInit, ViewChild } from '@angular/core';
import {MessageComponent} from './message/message.component'
import { DemoServiceService } from './demo-service.service';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'djclassclass2';
  parent_message = "I am passed from Parent";


  constructor(private dem02:DemoServiceService) {}
  @ViewChild(MessageComponent) mchild:MessageComponent;

  count={
    counter:10
  };
  updateCount=()=>{
    this.count.counter++;
  }

  parentAbc=(data)=>{
    console.log(data);
  }
  ngOnInit(){
    console.log(this.mchild);
    this.dem02.get('pop')
  }
  ngAfterViewInit(){
    console.log(this.mchild);
  }
}
