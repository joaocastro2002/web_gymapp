import { TestBed } from '@angular/core/testing';

import { DropCompararService } from './drop-comparar.service';

describe('DropCompararService', () => {
  let service: DropCompararService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropCompararService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});