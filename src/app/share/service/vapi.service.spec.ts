import { TestBed } from '@angular/core/testing';

import { VapiService } from './vapi.service';

describe('VapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VapiService = TestBed.get(VapiService);
    expect(service).toBeTruthy();
  });
});
