import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutsComponent} from './components/main-layouts/main-layouts.component';
import {UserModule} from 'src/modules/user/user.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsListComponent } from '../achievements/achievements-list/achievements-list.component';
import { SliderTopUsersComponent } from '../top-users/components/slider-top-users/slider-top-users.component';
import { SwiperModule } from 'swiper/angular';
import { AchievementsListItemComponent } from '../achievements/achievements-list-item/achievements-list-item.component';


const appRoutes: Routes =[
  { path: '', component: HomePageComponent },
  { path: 'achievements', component: AchievementsListComponent },
];

@NgModule({
  declarations: [
    MainLayoutsComponent,
    HomePageComponent,
    AchievementsListComponent,
    SliderTopUsersComponent,
    AchievementsListItemComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
    SwiperModule
  ],
  exports: [MainLayoutsComponent]
})
export class MainModule {}
