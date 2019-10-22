import { TestBed } from '@angular/core/testing';

import { GaecService } from './gaec.service';

describe('GaecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaecService = TestBed.get(GaecService);
    expect(service).toBeTruthy();
  });
});
