import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCartComponent } from './car-cart.component';

describe('CarCartComponent', () => {
  let component: CarCartComponent;
  let fixture: ComponentFixture<CarCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarCartComponent]
    });
    fixture = TestBed.createComponent(CarCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
