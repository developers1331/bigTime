import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDashboardComponent} from './components/profile-dashboard/profile-dashboard.component';
import {UserListAchievementsComponent} from './components/user-list-achievements/user-list-achievements.component';
import {UserListAchievementsItemComponent} from './components/user-list-achievements-item/user-list-achievements-item.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import { ProfileStatisticsItemComponent } from './components/profile-statistics-item/profile-statistics-item.component';



@NgModule({
  declarations: [
    ProfileDashboardComponent,
    UserListAchievementsComponent,
    UserListAchievementsItemComponent,
    UserInfoComponent,
    ProfileStatisticsItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProfileDashboardComponent],
})
export class UserModule {}
