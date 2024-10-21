import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  age:number = 32;
  name:string = "baba";
  phone:string = "+91";
  isinvalid:boolean = true;

  submit(){
    alert("submit clicked");
  }
  
  typing(){
    alert("typing");
  }
  

}
