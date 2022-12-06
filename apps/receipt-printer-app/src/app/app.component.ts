import { Component, OnInit } from '@angular/core';
import { Cart } from './interfaces/carts';
import { Product } from './interfaces/products';

import { CartsService } from './services/carts/carts.service';
import { ProductsService } from './services/products/products.service';
import { TaxesService } from './services/taxes/taxes.service';

@Component({
  selector: 'coding-challenge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'receipt-printer-app';

  inputCarts: Cart[] = [];

  constructor(
    private cartsService: CartsService,
    private productsService: ProductsService,
    private taxesService: TaxesService
  ){}

  ngOnInit() {
    const data = this.cartsService.getAll();
    if (data) {
      this.inputCarts = data;
    } else {
      this.inputCarts = [];
    }
  }

  /**
   * calculate taxes for cart
   * @return number calculateTaxes
   * @public
   */
  public getProduct(id: string): Product {
    return this.productsService.get(id);
  }

  /**
   * calculate price with taxes
   * @return number price
   * @public
   */
   public calculatePriceWithTaxes(productId: string): number {
    const product: Product = this.getProduct(productId);
    const price: number = this.taxesService.getPriceOfProductWithTaxes(product);
    return price;
  }
  /**
   * calculate taxes for cart
   * @return number taxes
   * @public
   */
  public calculateTaxforCart(cart: Cart): number {
    const taxes: number = this.cartsService.calculateTaxforCart(cart);
    return taxes;
  }

  /**
   * calculate total for cart
   * @return number total
   * @public
   */
   public calculateTotalforCart(cart: Cart): number {
    const total: number = this.cartsService.calculateTotalforCart(cart);
    return total;
  }
}
