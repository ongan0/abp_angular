import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneComponent } from './smartphone.component';

describe('SmartphoneComponent', () => {
  let component: SmartphoneComponent;
  let fixture: ComponentFixture<SmartphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartphoneComponent]
    });
    fixture = TestBed.createComponent(SmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
