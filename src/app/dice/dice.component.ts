import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
r:number=1;
result(){
  this.r = Math.floor(Math.random()*6)+1;
}

}
