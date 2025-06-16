import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTCliObtSldPrdComp } from './BTCliObtSldPrd.component';

describe('BTCliObtSldPrdComp', () => {
  let component: BTCliObtSldPrdComp;
  let fixture: ComponentFixture<BTCliObtSldPrdComp>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BTCliObtSldPrdComp]
    });
    fixture = TestBed.createComponent(BTCliObtSldPrdComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
