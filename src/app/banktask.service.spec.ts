import { TestBed } from '@angular/core/testing';

import { BanktaskService } from './banktask.service';

describe('BanktaskService', () => {
  let service: BanktaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanktaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
