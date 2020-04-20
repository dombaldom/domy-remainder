import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPythonComponent } from './learn-python.component';

describe('LearnPythonComponent', () => {
  let component: LearnPythonComponent;
  let fixture: ComponentFixture<LearnPythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
