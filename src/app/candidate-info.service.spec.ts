import { TestBed } from '@angular/core/testing';

import { CandidateInfoService } from './candidate-info.service';

describe('CandidateInfoService', () => {
  let service: CandidateInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
