import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DiceComponent } from './dice/dice.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TaskComponent } from './task/task.component';
import { ProductssalesComponent } from './productssales/productssales.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AmazonComponent } from './amazon/amazon.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EmployidcardsComponent } from './employidcards/employidcards.component';
import { BanktaskComponent } from './banktask/banktask.component';
import { FlipkartapitaskComponent } from './flipkartapitask/flipkartapitask.component';
import { MailapitaskComponent } from './mailapitask/mailapitask.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatebanktaskComponent } from './createbanktask/createbanktask.component';
import { StudentComponent } from './student/student.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard] ,component:DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'databinding', component:DatabindingComponent},
    {path:'calculator' , component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'dice',component:DiceComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'task', component:TaskComponent},
    {path:'productssales', component:ProductssalesComponent},
    {path:'higher-order', component:HigherOrderComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'employidcards',component:EmployidcardsComponent},
    {path:'banktask',component:BanktaskComponent},
    {path:'flipkartapitask',component:FlipkartapitaskComponent},
    {path:'mailapitask',component:MailapitaskComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'createbanktask',component:CreatebanktaskComponent},
    {path:'student',component:StudentComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student-progress',component:StudentProgressComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'bank-details/:id',component:BankDetailsComponent},
    

  ]},
  {path:'',component:LoginComponent},
  {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
