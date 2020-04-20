import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMachineLearningComponent } from './learn-machine-learning.component';

describe('LearnMachineLearningComponent', () => {
  let component: LearnMachineLearningComponent;
  let fixture: ComponentFixture<LearnMachineLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMachineLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
