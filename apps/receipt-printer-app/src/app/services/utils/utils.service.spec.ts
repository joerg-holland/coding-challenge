import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct rounded value', () => {
    const val1: number = service.roundingUpRule(1.00);
    expect(val1).toBe(1.00);
    const val2: number = service.roundingUpRule(1.02);
    expect(val2).toBe(1.05);
    const val3: number = service.roundingUpRule(1.05);
    expect(val3).toBe(1.05);
    const val4: number = service.roundingUpRule(1.06);
    expect(val4).toBe(1.1);
  });
});
