import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainissuesComponent } from './mainissues.component';

describe('MainissuesComponent', () => {
  let component: MainissuesComponent;
  let fixture: ComponentFixture<MainissuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainissuesComponent]
    });
    fixture = TestBed.createComponent(MainissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
