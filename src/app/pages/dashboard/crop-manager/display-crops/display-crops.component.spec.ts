import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCropsComponent } from './display-crops.component';

describe('DisplayCropsComponent', () => {
  let component: DisplayCropsComponent;
  let fixture: ComponentFixture<DisplayCropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
