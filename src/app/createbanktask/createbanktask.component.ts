import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BanktaskService } from '../banktask.service';

@Component({
  selector: 'app-createbanktask',
  templateUrl: './createbanktask.component.html',
  styleUrls: ['./createbanktask.component.css']
})
export class CreatebanktaskComponent {

  public banktaskForm: FormGroup = new FormGroup({

    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
    id: new FormControl()


  });

  constructor(private _banktaskService:BanktaskService){}

  submit(){
    console.log(this.banktaskForm.value);
    this._banktaskService.createbanktask(this.banktaskForm.value).subscribe(
      (data:any)=>{
        alert("created succesfully!!!");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }


}
