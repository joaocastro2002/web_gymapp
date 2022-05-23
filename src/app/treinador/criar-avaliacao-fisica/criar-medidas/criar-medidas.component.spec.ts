import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMedidasComponent } from './criar-medidas.component';

describe('CriarMedidasComponent', () => {
  let component: CriarMedidasComponent;
  let fixture: ComponentFixture<CriarMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMedidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
