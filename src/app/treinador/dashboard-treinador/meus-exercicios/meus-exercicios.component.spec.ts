import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusExerciciosComponent } from './meus-exercicios.component';

describe('MeusExerciciosComponent', () => {
  let component: MeusExerciciosComponent;
  let fixture: ComponentFixture<MeusExerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusExerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
