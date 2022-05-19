import { TestBed } from '@angular/core/testing';

import { PlanoTreinoService } from './plano-treino.service';

describe('PlanoTreinoService', () => {
  let service: PlanoTreinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanoTreinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
