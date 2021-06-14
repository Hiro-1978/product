import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../productitem/productitem.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChildren(ProductItemComponent)
  productItems!: QueryList<ProductItemComponent>;

  products: Product[];
  
  constructor() {
    this.products = [];
  }

  ngOnInit() { }
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }
}