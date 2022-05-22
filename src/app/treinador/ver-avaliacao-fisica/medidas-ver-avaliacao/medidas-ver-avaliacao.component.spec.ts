import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasVerAvaliacaoComponent } from './medidas-ver-avaliacao.component';

describe('MedidasVerAvaliacaoComponent', () => {
  let component: MedidasVerAvaliacaoComponent;
  let fixture: ComponentFixture<MedidasVerAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasVerAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasVerAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
