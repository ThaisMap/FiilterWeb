import { TestBed } from '@angular/core/testing';

import { FiiServiceService } from './fii-service.service';

describe('FiiServiceService', () => {
  let service: FiiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
