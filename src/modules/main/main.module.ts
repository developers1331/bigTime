import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutsComponent} from './components/main-layouts/main-layouts.component';
import {UserModule} from 'src/modules/user/user.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsListComponent } from '../achievements/achievements-list/achievements-list.component';

const appRoutes: Routes =[
  { path: '', component: HomePageComponent },
  { path: 'achievements', component: AchievementsListComponent },
];

@NgModule({
  declarations: [
    MainLayoutsComponent,
    HomePageComponent,
    AchievementsListComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [MainLayoutsComponent]
})
export class MainModule {}
