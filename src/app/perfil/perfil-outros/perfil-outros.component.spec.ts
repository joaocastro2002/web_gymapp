import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOutrosComponent } from './perfil-outros.component';

describe('PerfilOutrosComponent', () => {
  let component: PerfilOutrosComponent;
  let fixture: ComponentFixture<PerfilOutrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilOutrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilOutrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
