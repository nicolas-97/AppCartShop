import { TestBed } from '@angular/core/testing';

import { OcountCartService } from './ocount-cart.service';

describe('OcountCartService', () => {
  let service: OcountCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcountCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
