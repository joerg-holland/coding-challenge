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

  it('should return one product', () => {
    // Mock data:
    const mockProduct = {  
      id: 'd2b35cb0-74d9-47c4-90e2-dd2af549fb0b', 
      name: 'book', 
      price: 12.49, 
      import: false, 
      category: 'books'
    };
    // Load product with id:
    const product: Product = service.get(mockProduct.id);

    expect(product.name).toBe(mockProduct.name);
    expect(product.price).toBe(mockProduct.price);
    expect(product.import).toBe(mockProduct.import);
    expect(product.category).toBe(mockProduct.category);
  });
});
