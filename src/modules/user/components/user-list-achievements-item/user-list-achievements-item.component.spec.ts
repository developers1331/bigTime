import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListAchievementsItemComponent } from './user-list-achievements-item.component';

describe('UserListAchievementsItemComponent', () => {
  let component: UserListAchievementsItemComponent;
  let fixture: ComponentFixture<UserListAchievementsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListAchievementsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListAchievementsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
