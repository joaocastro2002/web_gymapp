import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararAvaliacaoFisicaComponent } from './comparar-avaliacao-fisica.component';

describe('CompararAvaliacaoFisicaComponent', () => {
  let component: CompararAvaliacaoFisicaComponent;
  let fixture: ComponentFixture<CompararAvaliacaoFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompararAvaliacaoFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararAvaliacaoFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
