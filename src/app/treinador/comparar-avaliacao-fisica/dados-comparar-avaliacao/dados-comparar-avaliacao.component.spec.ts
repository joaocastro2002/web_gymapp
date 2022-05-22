import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCompararAvaliacaoComponent } from './dados-comparar-avaliacao.component';

describe('DadosCompararAvaliacaoComponent', () => {
  let component: DadosCompararAvaliacaoComponent;
  let fixture: ComponentFixture<DadosCompararAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCompararAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCompararAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
