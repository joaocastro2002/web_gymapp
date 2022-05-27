import { TestBed } from '@angular/core/testing';

import { GinasiosMarcaService } from './ginasios-marca.service';

describe('GinasiosMarcaService', () => {
  let service: GinasiosMarcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GinasiosMarcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
