import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileDashboardComponent} from './components/profile-dashboard/profile-dashboard.component';
import {UserListAchievementsComponent} from './components/user-list-achievements/user-list-achievements.component';
import {UserListAchievementsItemComponent} from './components/user-list-achievements-item/user-list-achievements-item.component';
import {UserInfoComponent} from './components/user-info/user-info.component';



@NgModule({
  declarations: [
    ProfileDashboardComponent,
    UserListAchievementsComponent,
    UserListAchievementsItemComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProfileDashboardComponent],
})
export class UserModule {}
