import { TestBed } from '@angular/core/testing';

import { AgendamentosDesafiosService } from './agendamentos-desafios.service';

describe('AgendamentosDesafiosService', () => {
  let service: AgendamentosDesafiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentosDesafiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
