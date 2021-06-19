import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router' ;
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { ProductListComponent } from '../catalog/productlist/productlist.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
declarations: [],
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class ApprouteModule { }
