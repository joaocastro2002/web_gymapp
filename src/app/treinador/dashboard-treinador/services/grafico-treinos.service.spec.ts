import { TestBed } from '@angular/core/testing';

import { GraficoTreinosService } from './grafico-treinos.service';

describe('GraficoTreinosService', () => {
  let service: GraficoTreinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficoTreinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
