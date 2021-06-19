import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './catalog/productlist/productlist.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { FormsModule } from '@angular/forms';
import { ApprouteModule } from './approute/approute.module';
/* import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router'; */

/* const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: '**', component: PageNotFoundComponent }
  ]; */
 
@NgModule({
  declarations: [
    AppComponent/* ,
    LoginComponent,
    PageNotFoundComponent */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApprouteModule
  ],
  providers: [/* BackendService */],
  bootstrap: [AppComponent]
})
export class AppModule { }