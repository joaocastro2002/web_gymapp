import { TestBed } from '@angular/core/testing';

import { DropdownCompararService } from './dropdown-comparar.service';

describe('DropdownCompararService', () => {
  let service: DropdownCompararService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownCompararService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
