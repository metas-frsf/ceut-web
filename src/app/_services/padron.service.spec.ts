import { TestBed } from '@angular/core/testing';

import { PadronService } from './padron.service';

describe('PadronService', () => {
  let service: PadronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
