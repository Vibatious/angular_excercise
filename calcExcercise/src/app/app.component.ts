import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcExcercise';
  display:string ="none";
  op_sign:string ="";
  num1 :number = 0;
  num2 :number = 0;
  answer:number = 0;

  operation = (op1) => {
    switch(op1){
      case 'add': this.answer = Number(this.num1)+ Number(this.num2);
                  this.op_sign = "+";
                  if(this.display == 'none'){
                  this.display = 'inline-block';
                  }
              break;

      case 'sub': this.answer = Number(this.num1) - Number(this.num2);
                  this.op_sign = "-";
                  if(this.display == 'none'){
                  this.display = 'inline-block';
                  }
              break;

      case 'mul': this.answer = Number(this.num1) * Number(this.num2);
                  this.op_sign = "*";
                  if(this.display == 'none'){
                  this.display = 'inline-block';
                  }
              break;

      case 'divison': if(this.num2 !== 0){
                    this.answer = Number(this.num1) / Number(this.num2);
                    this.op_sign = "/";
                    if(this.display == 'none'){
                    this.display = 'inline-block';
                    console.log("h");
                   }
                  }else{
                    this.op_sign = "";
                    this.answer=this.num1=this.num2=0;
                    this.display = "none";
                    console.log(alert("divisor cannot be zero"));
                  }

              break;
      case 'clear':this.op_sign = "op";
                  this.answer=this.num1=this.num2=0;
                  this.display = "none";
              break;

    }
  }
}
