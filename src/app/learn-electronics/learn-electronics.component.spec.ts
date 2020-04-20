import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnElectronicsComponent } from './learn-electronics.component';

describe('LearnElectronicsComponent', () => {
  let component: LearnElectronicsComponent;
  let fixture: ComponentFixture<LearnElectronicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnElectronicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
