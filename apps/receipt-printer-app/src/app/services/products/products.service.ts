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

  /**
   * get one product with id
   * @return Product product
   * @public
   */
  public get(id: string): Product {
    const product = this.getAll().filter(x => x.id == id)[0];   
    return product;
  }
}
