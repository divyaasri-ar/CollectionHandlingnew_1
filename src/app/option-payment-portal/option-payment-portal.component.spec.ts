import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPaymentPortalComponent } from './option-payment-portal.component';

describe('OptionPaymentPortalComponent', () => {
  let component: OptionPaymentPortalComponent;
  let fixture: ComponentFixture<OptionPaymentPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionPaymentPortalComponent]
    });
    fixture = TestBed.createComponent(OptionPaymentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
