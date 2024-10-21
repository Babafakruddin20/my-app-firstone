import { Component } from '@angular/core';
import { MailapitaskService } from '../mailapitask.service';

@Component({
  selector: 'app-mailapitask',
  templateUrl: './mailapitask.component.html',
  styleUrls: ['./mailapitask.component.css']
})
export class MailapitaskComponent {
  mailapitasks:any =[];
  constructor(private _mailapitaskservice:MailapitaskService){
    _mailapitaskservice.getmailapitask().subscribe(
      (data:any)=>{
        this.mailapitasks=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }

}
