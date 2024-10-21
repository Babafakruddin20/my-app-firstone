import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  student : any = [];

  constructor(private _studentService:StudentService){
   _studentService.getstudent().subscribe(
    (data:any)=>{
      this.student=data;

    },
    (err:any)=>{
      alert("internal server error");
    }
   ) 
  }
}
