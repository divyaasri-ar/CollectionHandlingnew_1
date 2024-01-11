import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersupportViewticketComponent } from './customersupport-viewticket.component';

describe('CustomersupportViewticketComponent', () => {
  let component: CustomersupportViewticketComponent;
  let fixture: ComponentFixture<CustomersupportViewticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersupportViewticketComponent]
    });
    fixture = TestBed.createComponent(CustomersupportViewticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
