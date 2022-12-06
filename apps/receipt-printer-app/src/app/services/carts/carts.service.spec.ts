import { TestBed } from '@angular/core/testing';
import { Cart } from '../../interfaces/carts';

import { CartsService } from './carts.service';

describe('CartsService', () => {
  let service: CartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all carts', () => {
    // Load carts:
    const carts: Cart[] = service.getAll();

    expect(carts.length).toBe(3);
    expect(carts[0].products[0].id).toBe('d2b35cb0-74d9-47c4-90e2-dd2af549fb0b');
  });
});
