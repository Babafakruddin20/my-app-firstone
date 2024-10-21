import { Component } from '@angular/core';
import { FlipkartapitaskService } from '../flipkartapitask.service';

@Component({
  selector: 'app-flipkartapitask',
  templateUrl: './flipkartapitask.component.html',
  styleUrls: ['./flipkartapitask.component.css']
})
export class FlipkartapitaskComponent {

   flipkartapitasks:any=[];
   constructor(private _flipkartapitaskservice:FlipkartapitaskService){
    _flipkartapitaskservice.getflipkartapitask().subscribe(
      (data:any)=>{
        this.flipkartapitasks=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
    }    
  }


