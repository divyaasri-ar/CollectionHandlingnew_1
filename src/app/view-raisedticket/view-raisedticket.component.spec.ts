import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRaisedticketComponent } from './view-raisedticket.component';

describe('ViewRaisedticketComponent', () => {
  let component: ViewRaisedticketComponent;
  let fixture: ComponentFixture<ViewRaisedticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRaisedticketComponent]
    });
    fixture = TestBed.createComponent(ViewRaisedticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
