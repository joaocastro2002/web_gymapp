import { TestBed } from '@angular/core/testing';

import { AgendamentosAvalicaoBreafService } from './agendamentos-avalicao-breaf.service';

describe('AgendamentosAvalicaoBreafService', () => {
  let service: AgendamentosAvalicaoBreafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendamentosAvalicaoBreafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
