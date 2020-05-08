import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'djclass';
  
  height = 100;
  name = '';
  pName: string = '';
  hello = () =>{
    this.height+=100;
    if(this.height>1000){
      this.height = 100;
    }
    console.log("Send to server " + this.pName)
  }
}
