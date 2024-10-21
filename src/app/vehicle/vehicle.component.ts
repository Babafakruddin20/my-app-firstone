import { Component } from '@angular/core';
import { VehcileService } from '../vehcile.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any = [];
  term:string="";
  column:string="";
  order:string="";
  public page:number=1;
  constructor(private _vehicleService:VehcileService){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal serve error");
      }
    )
  }
  search(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;

      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }
  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert(err.errpr);
      }
    )
  }
  pagination(){
    this._vehicleService.getPagedVehicles(this.page).subscribe(
     (data:any)=>{
      this.vehicles=data;
     },
     (err:any)=>{
      alert(err.error);
     }
    
     
    )
  }
  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
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
