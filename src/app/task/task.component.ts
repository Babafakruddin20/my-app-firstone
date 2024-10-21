import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  // decleration
  name:string = "";
  names:string[] = [];

    // function

  submit(){
    this.names.push(this.name);
  }

  delete(){
    this.names.pop();
  }

  //  decleration
  studentname:string = "";
  studentage:number=0;

  students:any =[];

  // function

  create(){

    let student = {
      name: this.studentname,
      age:this.studentage
    }
    this.students.push(student);
  }
   
}
