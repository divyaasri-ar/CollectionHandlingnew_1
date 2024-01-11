import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPaymentComponent } from './option-payment.component';

describe('OptionPaymentComponent', () => {
  let component: OptionPaymentComponent;
  let fixture: ComponentFixture<OptionPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionPaymentComponent]
    });
    fixture = TestBed.createComponent(OptionPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
