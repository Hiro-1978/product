import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MaincontentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    MaincontentComponent,
  ]
})
export class HomeModule { }
