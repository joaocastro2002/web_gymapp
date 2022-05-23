import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCompararComponent } from './dropdown-comparar.component';

describe('DropdownCompararComponent', () => {
  let component: DropdownCompararComponent;
  let fixture: ComponentFixture<DropdownCompararComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCompararComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCompararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
