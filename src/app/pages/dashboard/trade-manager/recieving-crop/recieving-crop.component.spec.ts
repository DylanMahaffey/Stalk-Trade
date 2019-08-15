import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievingCropComponent } from './recieving-crop.component';

describe('RecievingCropComponent', () => {
  let component: RecievingCropComponent;
  let fixture: ComponentFixture<RecievingCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievingCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievingCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
