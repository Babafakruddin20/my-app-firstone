import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http';
import { EmployidcardsComponent } from './employidcards/employidcards.component';
import { BanktaskComponent } from './banktask/banktask.component';
import { FlipkartapitaskComponent } from './flipkartapitask/flipkartapitask.component';
import { MailapitaskComponent } from './mailapitask/mailapitask.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatebanktaskComponent } from './createbanktask/createbanktask.component';
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DiceComponent,
    DirectivesComponent,
    PipesComponent,
    TaskComponent,
    ProductssalesComponent,
    HigherOrderComponent,
    FlipkartComponent,
    AmazonComponent,
    VehicleComponent,
    EmployidcardsComponent,
    BanktaskComponent,
    FlipkartapitaskComponent,
    MailapitaskComponent,
    CreateVehicleComponent,
    CreatebanktaskComponent,
    StudentComponent,
    CreateUserComponent,
    StudentProgressComponent,
    VehicleDetailsComponent,
    BankDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
