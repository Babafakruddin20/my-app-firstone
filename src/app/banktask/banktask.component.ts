import { Component } from '@angular/core';
import { BanktaskService } from '../banktask.service';

@Component({
  selector: 'app-banktask',
  templateUrl: './banktask.component.html',
  styleUrls: ['./banktask.component.css']
})
export class BanktaskComponent {
  banktasks:any =[];
  term:string = "";
  column:string ="";
  order:string="";
  public page:number=1;

  

  constructor(private _banktaskService:BanktaskService){
    _banktaskService.getbanktasks().subscribe(
      (data:any)=>{
        this.banktasks = data;
      },
      (err:any)=>{
        alert("err.error");
      }
    )
  }
  search(){
    this._banktaskService.getFilteredbanktask(this.term).subscribe(
      (data:any)=>{
        this.banktasks=data;
      },
      (err:any)=>{
        alert("err.error");
      }
    )
  }

  sort(){
    this._banktaskService.getSortedbanktask(this.column, this.order).subscribe(
      (data:any)=>{
        this.banktasks=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  pagination(){
    this._banktaskService.getPagebanktask(this.page).subscribe(
     (data:any)=>{
      this.banktasks=data;
     } ,
     (err:any)=>{
      alert(err.error);
     }
    )
  }

  delete(id:string){
    this._banktaskService.deletebanktask(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully");
        location.reload();
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

}
