import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangularComponent } from './langular.component';

describe('LangularComponent', () => {
  let component: LangularComponent;
  let fixture: ComponentFixture<LangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
