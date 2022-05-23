import { TestBed } from '@angular/core/testing';

import { MeusExerciciosTreinadorService } from './meus-exercicios-treinador.service';

describe('MeusExerciciosTreinadorService', () => {
  let service: MeusExerciciosTreinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusExerciciosTreinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
