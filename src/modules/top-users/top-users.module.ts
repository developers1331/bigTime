import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderTopUsersComponent } from './slider-top-users/slider-top-users.component';
import { SliderTopUsersListComponent } from './components/slider-top-users-list/slider-top-users-list.component';
import { SliderTopUsersListItemComponent } from './components/slider-top-users-list-item/slider-top-users-list-item.component';



@NgModule({
  declarations: [
    SliderTopUsersComponent,
    SliderTopUsersListComponent,
    SliderTopUsersListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopUsersModule { }
