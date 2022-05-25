import { TestBed } from '@angular/core/testing';

import { DropdownGinasiosService } from './dropdown-ginasios.service';

describe('DropdownGinasiosService', () => {
  let service: DropdownGinasiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownGinasiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
