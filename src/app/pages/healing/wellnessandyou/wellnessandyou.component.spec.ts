import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessandyouComponent } from './wellnessandyou.component';

describe('WellnessandyouComponent', () => {
  let component: WellnessandyouComponent;
  let fixture: ComponentFixture<WellnessandyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellnessandyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessandyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
