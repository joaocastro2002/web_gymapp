import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAvaliacaoFisicaComponent } from './ver-avaliacao-fisica.component';

describe('VerAvaliacaoFisicaComponent', () => {
  let component: VerAvaliacaoFisicaComponent;
  let fixture: ComponentFixture<VerAvaliacaoFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAvaliacaoFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAvaliacaoFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
