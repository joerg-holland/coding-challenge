import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Cart } from './interfaces/carts';
import { Product } from './interfaces/products';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  afterEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the variable title with the value 'receipt-printer-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('receipt-printer-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello there 👋'
    );
  });

  it('should return an array of carts', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.inputCarts.length).toBeGreaterThanOrEqual(3);
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
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Load product with id:
    const product: Product = app.getProduct(mockProduct.id);

    expect(product.name).toBe(mockProduct.name);
    expect(product.price).toBe(mockProduct.price);
    expect(product.import).toBe(mockProduct.import);
    expect(product.category).toBe(mockProduct.category);
  });

  it('should return price of product with taxes', () => {
    // Mock data:
    const mockProducts: Product[] = [
      { id: '74609292-af62-4eea-98c3-6bad8d15dc94', name: 'music CD', price: 14.99, import: false, category: 'music' }
    ];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const price: number = app.calculatePriceWithTaxes(mockProducts[0].id);
    expect(price).toBe(16.49);
  });

  it('should return taxes of a cart', () => {
    // Mock data:
    const mockCarts: Cart[] = [
      { 
        id: 'eda9b9e0-11c4-4a45-b644-746089ae0527', 
        products: [
            { id: 'd2b35cb0-74d9-47c4-90e2-dd2af549fb0b', amount: 1 },
            { id: '74609292-af62-4eea-98c3-6bad8d15dc94', amount: 1 },
            { id: 'fe91fc7a-0918-48b1-b9d2-fa32410321ff', amount: 1 }
        ]
      },
      { 
        id: '4510b644-e993-461a-8ce7-b04a2b6671e3', 
        products: [
            { id: 'd7f325f6-03b9-4b21-bf44-39fd24963c6f', amount: 1 },
            { id: 'f7b0d06b-95b7-4c6d-847b-b7fe04bffa24', amount: 1 }
        ]
      },
      { 
          id: 'c8b9fe24-8be0-4bc2-a421-d7b0e23af0f6', 
          products: [
              { id: 'b360e091-6c69-4d8c-81c6-acc4fb70cf31', amount: 1 },
              { id: 'c8cca8c7-12a4-4a6b-a8de-56f9b41e15cd', amount: 1 },
              { id: 'd60b1970-ac6c-4107-853e-f1ef2bc89c83', amount: 1 },
              { id: '04178a84-66ec-49d7-bcb1-fdbc3e60da84', amount: 1 }
          ]
      }
    ];

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Calculate and check taxes:
    const taxesCart1: number = app.calculateTaxforCart(mockCarts[0]);
    expect(taxesCart1).toBe(1.50);
    const taxesCart2: number = app.calculateTaxforCart(mockCarts[1]);
    expect(taxesCart2).toBe(7.65);
    const taxesCart3: number = app.calculateTaxforCart(mockCarts[2]);
    expect(taxesCart3).toBe(6.70);
  });

  it('should return total of a cart', () => {
    // Mock data:
    const mockCarts: Cart[] = [
      { 
        id: 'eda9b9e0-11c4-4a45-b644-746089ae0527', 
        products: [
            { id: 'd2b35cb0-74d9-47c4-90e2-dd2af549fb0b', amount: 1 },
            { id: '74609292-af62-4eea-98c3-6bad8d15dc94', amount: 1 },
            { id: 'fe91fc7a-0918-48b1-b9d2-fa32410321ff', amount: 1 }
        ]
      },
      { 
        id: '4510b644-e993-461a-8ce7-b04a2b6671e3', 
        products: [
            { id: 'd7f325f6-03b9-4b21-bf44-39fd24963c6f', amount: 1 },
            { id: 'f7b0d06b-95b7-4c6d-847b-b7fe04bffa24', amount: 1 }
        ]
      },
      { 
          id: 'c8b9fe24-8be0-4bc2-a421-d7b0e23af0f6', 
          products: [
              { id: 'b360e091-6c69-4d8c-81c6-acc4fb70cf31', amount: 1 },
              { id: 'c8cca8c7-12a4-4a6b-a8de-56f9b41e15cd', amount: 1 },
              { id: 'd60b1970-ac6c-4107-853e-f1ef2bc89c83', amount: 1 },
              { id: '04178a84-66ec-49d7-bcb1-fdbc3e60da84', amount: 1 }
          ]
      }
    ];

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Calculate and check total of cart:
    const taxesCart1: number = app.calculateTotalforCart(mockCarts[0]);
    expect(taxesCart1).toBe(29.83);
    const taxesCart2: number = app.calculateTotalforCart(mockCarts[1]);
    expect(taxesCart2).toBe(65.15);
    const taxesCart3: number = app.calculateTotalforCart(mockCarts[2]);
    expect(taxesCart3).toBe(74.68);
  });
});
