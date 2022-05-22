import { TestBed } from '@angular/core/testing';

import { MeusExerciciosService } from './meus-exercicios.service';

describe('MeusExerciciosService', () => {
  let service: MeusExerciciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusExerciciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
