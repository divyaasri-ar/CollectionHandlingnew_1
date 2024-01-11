import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentPaymentsuccessComponent } from './installment-paymentsuccess.component';

describe('InstallmentPaymentsuccessComponent', () => {
  let component: InstallmentPaymentsuccessComponent;
  let fixture: ComponentFixture<InstallmentPaymentsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentPaymentsuccessComponent]
    });
    fixture = TestBed.createComponent(InstallmentPaymentsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
