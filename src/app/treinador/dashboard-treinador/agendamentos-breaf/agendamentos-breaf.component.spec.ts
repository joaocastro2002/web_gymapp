import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosBreafComponent } from './agendamentos-breaf.component';

describe('AgendamentosBreafComponent', () => {
  let component: AgendamentosBreafComponent;
  let fixture: ComponentFixture<AgendamentosBreafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosBreafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentosBreafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
