import { TestBed } from '@angular/core/testing';

import { TaxesService } from './taxes.service';
import { Product } from '../../interfaces/products';

describe('TaxesService', () => {
  let service: TaxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return taxes of products', () => {
    // Mock data:
    const mockProducts: Product[] = [
      { id: 'd2b35cb0-74d9-47c4-90e2-dd2af549fb0b', name: 'book', price: 12.49, import: false, category: 'books' },
      { id: 'fe91fc7a-0918-48b1-b9d2-fa32410321ff', name: 'chocolate bar', price: 0.85, import: false, category: 'food' },
      { id: 'd60b1970-ac6c-4107-853e-f1ef2bc89c83', name: 'packet of headache pills', price: 9.75, import: false, category: 'medical' },
      { id: 'd7f325f6-03b9-4b21-bf44-39fd24963c6f', name: 'imported box of chocolates', price: 10.00, import: true, category: 'food' },
      { id: 'c8cca8c7-12a4-4a6b-a8de-56f9b41e15cd', name: 'botle of perfume', price: 18.99, import: false, category: 'cosmetics' },
      { id: 'f7b0d06b-95b7-4c6d-847b-b7fe04bffa24', name: 'imported bottle of perfume', price: 47.50, import: true, category: 'cosmetics' }
    ];
    const taxBook: number = service.getTaxFromProduct(mockProducts[0]);
    expect(taxBook).toBe(0);
    const taxFood: number = service.getTaxFromProduct(mockProducts[1]);
    expect(taxFood).toBe(0);
    const taxMedical: number = service.getTaxFromProduct(mockProducts[2]);
    expect(taxMedical).toBe(0);
    const taxFoodImported: number = service.getTaxFromProduct(mockProducts[3]);
    expect(taxFoodImported).toBe(0.5);
    const taxCosmetics: number = service.getTaxFromProduct(mockProducts[4]);
    expect(taxCosmetics).toBe(1.9);
    const taxCosmeticsImported: number = service.getTaxFromProduct(mockProducts[5]);
    expect(taxCosmeticsImported).toBe(7.15);
  });
});
