import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProduct(): Product[] {
    return [
      {name: 'OPPO F9', price: 3500},
      {name: 'OPPO F11', price: 6500},
      {name: 'OPPO Reno 5G', price: 9900}
    ];
  } 
}
