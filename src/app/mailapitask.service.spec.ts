import { TestBed } from '@angular/core/testing';

import { MailapitaskService } from './mailapitask.service';

describe('MailapitaskService', () => {
  let service: MailapitaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailapitaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
