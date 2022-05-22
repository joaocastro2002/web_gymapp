import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPublicacaoComponent } from './ver-publicacao.component';

describe('VerPublicacaoComponent', () => {
  let component: VerPublicacaoComponent;
  let fixture: ComponentFixture<VerPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPublicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
