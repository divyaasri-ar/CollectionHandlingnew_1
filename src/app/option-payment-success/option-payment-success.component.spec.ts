import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPaymentSuccessComponent } from './option-payment-success.component';

describe('OptionPaymentSuccessComponent', () => {
  let component: OptionPaymentSuccessComponent;
  let fixture: ComponentFixture<OptionPaymentSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionPaymentSuccessComponent]
    });
    fixture = TestBed.createComponent(OptionPaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
