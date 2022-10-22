import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatisticsItemComponent } from './profile-statistics-item.component';

describe('ProfileStatisticsItemComponent', () => {
  let component: ProfileStatisticsItemComponent;
  let fixture: ComponentFixture<ProfileStatisticsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileStatisticsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileStatisticsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
