import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasCompararAvaliacaoComponent } from './medidas-comparar-avaliacao.component';

describe('MedidasCompararAvaliacaoComponent', () => {
  let component: MedidasCompararAvaliacaoComponent;
  let fixture: ComponentFixture<MedidasCompararAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasCompararAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasCompararAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
