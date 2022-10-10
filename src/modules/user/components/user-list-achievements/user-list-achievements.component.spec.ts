import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListAchievementsComponent } from './user-list-achievements.component';

describe('UserListAchievementsComponent', () => {
  let component: UserListAchievementsComponent;
  let fixture: ComponentFixture<UserListAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListAchievementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
