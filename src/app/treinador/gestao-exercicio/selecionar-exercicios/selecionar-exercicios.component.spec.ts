import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarExerciciosComponent } from './selecionar-exercicios.component';

describe('SelecionarExerciciosComponent', () => {
  let component: SelecionarExerciciosComponent;
  let fixture: ComponentFixture<SelecionarExerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarExerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
