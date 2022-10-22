import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsListItemComponent } from './achievements-list-item.component';

describe('AchievementsListItemComponent', () => {
  let component: AchievementsListItemComponent;
  let fixture: ComponentFixture<AchievementsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
