import { TestBed } from '@angular/core/testing';

import { CompararAvaliacaoFisicaService } from './comparar-avaliacao-fisica.service';

describe('CompararAvaliacaoFisicaService', () => {
  let service: CompararAvaliacaoFisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompararAvaliacaoFisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
