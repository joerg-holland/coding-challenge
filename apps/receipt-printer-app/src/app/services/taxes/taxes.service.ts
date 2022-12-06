import { Injectable } from '@angular/core';

import { Product } from '../../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class TaxesService {

  basicTax = 0.1;
  importTax = 0.05
  freeTaxCategories = ['books', 'food', 'medical'];

  /**
   * get tax from product
   * @return number productTax
   * @public
   */
  public getTaxFromProduct(product: Product): number {

    let taxPercent = 0;
    if (!this.freeTaxCategories.includes(product.category)) {
      taxPercent += this.basicTax;
    }
    if (product.import) {
      taxPercent += this.importTax;
    }

    const productTax = Number((product.price * taxPercent).toFixed(4));

    return productTax;
  }
}
