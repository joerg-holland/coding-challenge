import { TestBed } from '@angular/core/testing';
import { Product } from '../../interfaces/products';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all products', () => {
    // Load products:
    const products: Product[] = service.getAll();

    expect(products.length).toBe(9);
    expect(products[0].id).toBe('d2b35cb0-74d9-47c4-90e2-dd2af549fb0b');
  });
});
