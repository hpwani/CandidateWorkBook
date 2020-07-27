import { TestBed } from '@angular/core/testing';

import { CandidateDBService } from './candidate-db.service';

describe('CandidateDBService', () => {
  let service: CandidateDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
