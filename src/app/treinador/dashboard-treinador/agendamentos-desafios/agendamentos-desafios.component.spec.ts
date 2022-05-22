import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosDesafiosComponent } from './agendamentos-desafios.component';

describe('AgendamentosDesafiosComponent', () => {
  let component: AgendamentosDesafiosComponent;
  let fixture: ComponentFixture<AgendamentosDesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosDesafiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentosDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
