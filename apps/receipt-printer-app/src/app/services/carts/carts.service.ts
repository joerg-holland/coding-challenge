import { Injectable } from '@angular/core';

import { CARTS } from '../../data/carts.data';
import { Cart } from '../../interfaces/carts';
import { ProductsService } from '../products/products.service';
import { TaxesService } from '../taxes/taxes.service';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(
    private productsService: ProductsService,
    private taxesService: TaxesService
  ){}

  /**
   * get all carts
   * @return Cart[] CARTS
   * @public
   */
  public getAll(): Cart[] {
    return CARTS;
  }

  /**
   * calculate taxes for cart
   * @return number calculateTaxes
   * @public
   */
  public calculateTaxforCart(cart: Cart): number {
    let calculateTaxes = 0.0;

    cart.products.forEach(cartProduct => {
      const product = this.productsService.get(cartProduct.id);
      const resultTaxFromProduct = this.taxesService.getTaxFromProduct(product);
      calculateTaxes = Number((calculateTaxes + resultTaxFromProduct).toFixed(2));
    });

    return calculateTaxes;
  }
}
