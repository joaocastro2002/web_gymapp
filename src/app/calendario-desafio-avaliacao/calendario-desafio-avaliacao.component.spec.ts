import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioDesafioAvaliacaoComponent } from './calendario-desafio-avaliacao.component';

describe('CalendarioDesafioAvaliacaoComponent', () => {
  let component: CalendarioDesafioAvaliacaoComponent;
  let fixture: ComponentFixture<CalendarioDesafioAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioDesafioAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioDesafioAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
