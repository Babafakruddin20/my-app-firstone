import { Component } from '@angular/core';

@Component({
  selector: 'app-employidcards',
  templateUrl: './employidcards.component.html',
  styleUrls: ['./employidcards.component.css']
})
export class EmployidcardsComponent {

 name:string="";
 experience: number=0;
 package: number=0;
 role:string="";
 term:any="";

  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
]

create(){
  let employee={
    name:this.name,
    experience:this.experience,
    package:this.package,
    role:this.role,

  }
  this.employees.push(employee);
}
delete(i:number){
  this.employees.splice(i,1);
}
hike20(){
  this.employees=this.employees.map(employ=>{employ.package=employ.package*(1.2);
  return employ});
}
festivalbonus(){
  this.employees=this.employees.map(employee=>{employee.package=employee.package+30000;
    return employee;
  });
}
search(){
  this.employees=this.employees.filter((employee)=>employee.name.includes(this.term));
}
explh(){
  this.employees.sort((a,b)=>a.experience-b.experience);
}
exphl(){
  this.employees.sort((a,b)=>b.experience-a.experience);
}
packlh(){
  this.employees.sort((a,b)=>a.package-b.package);
}
packhl(){
  this.employees.sort((a,b)=>b.package-a.package);
}
expenditure(){
  var total=this.employees.reduce((sum,employee)=>sum+employee.package,0);
  alert('total expenditure'+total);

}
totalemployees(){
  alert('total employees'+this.employees.length);
}


}
