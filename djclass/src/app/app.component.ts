import { Component, OnInit, ViewChild } from '@angular/core';
import {MessageComponent} from './message/message.component'
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'djclass class2';
  parent_message = "I am passed from Parent";

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
  }
  ngAfterViewInit(){
    console.log(this.mchild);
  }
}
