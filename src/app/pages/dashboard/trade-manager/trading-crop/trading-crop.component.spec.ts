import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingCropComponent } from './trading-crop.component';

describe('TradingCropComponent', () => {
  let component: TradingCropComponent;
  let fixture: ComponentFixture<TradingCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
