import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoExercicioComponent } from './gestao-exercicio.component';

describe('GestaoExercicioComponent', () => {
  let component: GestaoExercicioComponent;
  let fixture: ComponentFixture<GestaoExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoExercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
