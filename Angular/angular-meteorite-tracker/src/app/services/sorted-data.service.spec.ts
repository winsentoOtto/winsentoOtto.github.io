import { TestBed } from '@angular/core/testing';

import { SortedDataService } from './sorted-data.service';

describe('SortedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortedDataService = TestBed.get(SortedDataService);
    expect(service).toBeTruthy();
  });
});
