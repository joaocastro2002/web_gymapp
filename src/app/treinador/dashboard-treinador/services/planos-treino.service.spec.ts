import { TestBed } from '@angular/core/testing';

import { PlanosTreinoService } from './planos-treino.service';

describe('PlanosTreinoService', () => {
  let service: PlanosTreinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanosTreinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
