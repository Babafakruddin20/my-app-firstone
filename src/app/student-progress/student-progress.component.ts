import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-progress',
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.css']
})
export class StudentProgressComponent {

  public userForm: FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    class:new FormControl("",[Validators.required,Validators.min(1),Validators.max(2)]),
    fathername: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    dob:new FormControl(),
    address: new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state: new FormControl("",[Validators.required]),
      pincode:new FormControl(),
    }),
    company: new FormGroup({
      name: new FormControl(),
      package: new FormControl("",[Validators.required,Validators.min(1000000),Validators.max(2500000)]),
    }),
    type: new FormControl(),
    marks: new FormArray([])
    
  })
  get marksFormArray(){
    return this.userForm.get('marks')as FormArray;

  } 
  addstudents(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      })
    )
  }
  delete(i:number){
    this.marksFormArray.removeAt(i);
  }
  
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busfee', new FormControl());
          this.userForm.removeControl('hostelfee');
        }
        else{
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
    )
  }

  submit(){
    console.log(this.userForm);
  }


}
