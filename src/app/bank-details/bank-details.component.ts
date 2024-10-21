import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BanktaskService } from '../banktask.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent {

  public banktask:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _banktaskService:BanktaskService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        // api call with data.id
        _banktaskService.getbanktask(data.id).subscribe(
          (data:any)=>{
            this.banktask = data;
          }
        )
      }
    )
  }

}
