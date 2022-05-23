import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasCompararAvaliacao2Component } from './medidas-comparar-avaliacao2.component';

describe('MedidasCompararAvaliacao2Component', () => {
  let component: MedidasCompararAvaliacao2Component;
  let fixture: ComponentFixture<MedidasCompararAvaliacao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedidasCompararAvaliacao2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasCompararAvaliacao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
