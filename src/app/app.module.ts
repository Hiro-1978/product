import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './productitem/productitem.component';
import { ProductListComponent } from './productlist/productlist.component';
import { PanelComponent } from './panel/panel.component';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }