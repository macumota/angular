import { TestBed } from '@angular/core/testing';

import { ApiExamsService } from './api-exams.service';

describe('ApiExamsService', () => {
  let service: ApiExamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
