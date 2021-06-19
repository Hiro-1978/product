import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product;

  @Output()
  OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter();

  isSelected!: boolean;

  constructor() { }

  ngOnInit() { }

  select() {
    this.OnSelected.emit(this);
  }
}