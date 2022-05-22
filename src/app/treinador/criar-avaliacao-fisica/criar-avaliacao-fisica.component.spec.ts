import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAvaliacaoFisicaComponent } from './criar-avaliacao-fisica.component';

describe('CriarAvaliacaoFisicaComponent', () => {
  let component: CriarAvaliacaoFisicaComponent;
  let fixture: ComponentFixture<CriarAvaliacaoFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAvaliacaoFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAvaliacaoFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
