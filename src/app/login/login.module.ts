import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, LoginRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule
  ]
})
export class LoginModule { }
