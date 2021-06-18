import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  @ViewChild('productList',{static: true})
  productList!: ProductListComponent;

  ngOnInit(): void {
/*     this.productList.products = [
      {name: 'OPPO F9', price: 3500},
      {name: 'OPPO F11', price: 6500},
      {name: 'OPPO Reno 5G', price: 9900}
    ]; */
    this.productList.products = this.backendService.getProduct();
  }
}