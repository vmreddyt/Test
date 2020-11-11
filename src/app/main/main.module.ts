import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [MainComponent, SideNavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
   
  ]
})
export class MainModule { }
