import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
 import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgbModule,
    DashboardRoutingModule,
    GoogleMapsModule
  ]
})
export class DashboardModule { }
