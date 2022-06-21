import { TestBed } from '@angular/core/testing';

import { DolaresService } from './dolares.service';

describe('DolaresService', () => {
  let service: DolaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DolaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
