import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
hei:number=0;
wei:number=0;
result:number=0;
calculate(){
  this.result=(this.wei)/((this.hei/100)*(this.hei/100));

}
}
