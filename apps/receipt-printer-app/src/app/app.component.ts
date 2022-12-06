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

  getProduct(id: string): Product {
    return this.productsService.get(id);
  }

  calculatePriceWithTaxes(productId: string): number {
    const product: Product = this.getProduct(productId);
    return this.taxesService.getPriceOfProductWithTaxes(product);
  }

  calculateTaxforCart(cart: Cart): number {
    return this.cartsService.calculateTaxforCart(cart);
  }

  calculateTotalforCart(cart: Cart): number {
    return this.cartsService.calculateTotalforCart(cart);
  }
}
