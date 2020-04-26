import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcalculusComponent } from './lcalculus.component';

describe('LcalculusComponent', () => {
  let component: LcalculusComponent;
  let fixture: ComponentFixture<LcalculusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcalculusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
