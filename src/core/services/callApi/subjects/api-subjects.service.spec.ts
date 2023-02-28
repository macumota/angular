import { TestBed } from '@angular/core/testing';

import { ApiSubjectsService } from './api-subjects.service';

describe('ApiSubjectsService', () => {
  let service: ApiSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
