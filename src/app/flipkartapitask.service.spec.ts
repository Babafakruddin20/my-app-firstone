import { TestBed } from '@angular/core/testing';

import { FlipkartapitaskService } from './flipkartapitask.service';

describe('FlipkartapitaskService', () => {
  let service: FlipkartapitaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartapitaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
