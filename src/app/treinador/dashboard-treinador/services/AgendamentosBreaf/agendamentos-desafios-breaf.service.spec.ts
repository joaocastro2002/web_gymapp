import { TestBed } from '@angular/core/testing';

import { AgendamentosDesafiosBreafService } from './agendamentos-desafios-breaf.service';

describe('AgendamentosDesafiosBreafService', () => {
  let service: AgendamentosDesafiosBreafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentosDesafiosBreafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
