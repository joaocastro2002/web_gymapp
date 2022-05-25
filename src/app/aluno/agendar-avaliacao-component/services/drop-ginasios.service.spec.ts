import { TestBed } from '@angular/core/testing';

import { DropGinasiosService } from './drop-ginasios.service';

describe('DropGinasiosService', () => {
  let service: DropGinasiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropGinasiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
