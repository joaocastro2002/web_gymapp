import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizadoresLogadosComponent } from './utilizadores-logados.component';

describe('UtilizadoresLogadosComponent', () => {
  let component: UtilizadoresLogadosComponent;
  let fixture: ComponentFixture<UtilizadoresLogadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizadoresLogadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizadoresLogadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
