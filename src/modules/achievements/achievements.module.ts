import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsListComponent } from './achievements-list/achievements-list.component';
import { AchievementsListItemComponent } from './achievements-list-item/achievements-list-item.component';
import { HomePageComponent } from '../main/components/home-page/home-page.component';


@NgModule({
  declarations: [
    AchievementsListComponent,
    AchievementsListItemComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AchievementsModule { }
