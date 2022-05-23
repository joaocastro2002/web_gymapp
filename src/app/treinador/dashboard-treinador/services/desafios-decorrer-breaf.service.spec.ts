import { TestBed } from '@angular/core/testing';

import { DesafiosDecorrerBreafService } from './desafios-decorrer-breaf.service';

describe('DesafiosDecorrerBreafService', () => {
  let service: DesafiosDecorrerBreafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesafiosDecorrerBreafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
