import { Injectable } from '@angular/core';

import { Product } from '../../interfaces/products';
import { PRODUCTS } from '../../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /**
   * get all products
   * @return Product[] PRODUCTS
   * @public
   */
  public getAll(): Product[] {
    return PRODUCTS;
  }
}
