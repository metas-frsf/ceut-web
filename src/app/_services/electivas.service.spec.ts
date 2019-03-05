import { TestBed } from '@angular/core/testing';

import { ElectivasService } from './electivas.service';

describe('ElectivasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectivasService = TestBed.get(ElectivasService);
    expect(service).toBeTruthy();
  });
});
