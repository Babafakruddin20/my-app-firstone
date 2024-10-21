import { TestBed } from '@angular/core/testing';

import { VehcileService } from './vehcile.service';

describe('VehcileService', () => {
  let service: VehcileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehcileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
