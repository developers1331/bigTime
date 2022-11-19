import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTopUsersComponent } from './slider-top-users.component';

describe('SliderTopUsersComponent', () => {
  let component: SliderTopUsersComponent;
  let fixture: ComponentFixture<SliderTopUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTopUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTopUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
