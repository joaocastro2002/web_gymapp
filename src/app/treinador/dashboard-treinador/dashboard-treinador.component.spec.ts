import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTreinadorComponent } from './dashboard-treinador.component';

describe('DashboardTreinadorComponent', () => {
  let component: DashboardTreinadorComponent;
  let fixture: ComponentFixture<DashboardTreinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTreinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
