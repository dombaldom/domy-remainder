import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCalculusComponent } from './learn-calculus.component';

describe('LearnCalculusComponent', () => {
  let component: LearnCalculusComponent;
  let fixture: ComponentFixture<LearnCalculusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnCalculusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnCalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
