import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTopUsersListComponent } from './slider-top-users-list.component';

describe('SliderTopUsersListComponent', () => {
  let component: SliderTopUsersListComponent;
  let fixture: ComponentFixture<SliderTopUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTopUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTopUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
