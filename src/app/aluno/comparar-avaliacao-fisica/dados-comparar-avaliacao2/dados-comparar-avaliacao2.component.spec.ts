import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCompararAvaliacao2Component } from './dados-comparar-avaliacao2.component';

describe('DadosCompararAvaliacao2Component', () => {
  let component: DadosCompararAvaliacao2Component;
  let fixture: ComponentFixture<DadosCompararAvaliacao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCompararAvaliacao2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCompararAvaliacao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
