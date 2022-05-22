import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetaDireitaComponent } from './seta-direita.component';

describe('SetaDireitaComponent', () => {
  let component: SetaDireitaComponent;
  let fixture: ComponentFixture<SetaDireitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetaDireitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetaDireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
