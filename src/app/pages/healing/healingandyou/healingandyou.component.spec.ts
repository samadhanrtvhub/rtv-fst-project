import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingandyouComponent } from './healingandyou.component';

describe('HealingandyouComponent', () => {
  let component: HealingandyouComponent;
  let fixture: ComponentFixture<HealingandyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealingandyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealingandyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
