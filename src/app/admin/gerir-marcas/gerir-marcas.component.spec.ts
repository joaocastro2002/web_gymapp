import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirMarcasComponent } from './gerir-marcas.component';

describe('GerirMarcasComponent', () => {
  let component: GerirMarcasComponent;
  let fixture: ComponentFixture<GerirMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerirMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
