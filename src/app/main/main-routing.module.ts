import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '',
component: MainComponent,
children: [
  {
    path: 'dashboard',
    loadChildren : () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
  }
]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
