import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosSelecionadosComponent } from './exercicios-selecionados.component';

describe('ExerciciosSelecionadosComponent', () => {
  let component: ExerciciosSelecionadosComponent;
  let fixture: ComponentFixture<ExerciciosSelecionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosSelecionadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosSelecionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
