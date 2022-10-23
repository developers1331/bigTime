import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTopUsersListItemComponent } from './slider-top-users-list-item.component';

describe('SliderTopUsersListItemComponent', () => {
  let component: SliderTopUsersListItemComponent;
  let fixture: ComponentFixture<SliderTopUsersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTopUsersListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTopUsersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
