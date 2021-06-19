import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { ProductItemComponent } from './productitem/productitem.component';
import { ProductListComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BackendService } from '../backend.service';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    PanelComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [BackendService],
  exports: [
    ProductListComponent,
    PanelComponent,
    ProductItemComponent
  ]
})
export class CatalogModule { }
