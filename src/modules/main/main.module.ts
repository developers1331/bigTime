import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutsComponent} from './components/main-layouts/main-layouts.component';
import {UserModule} from 'src/modules/user/user.module';
import {HomePageComponent} from './components/home-page/home-page.component';



@NgModule({
  declarations: [
    MainLayoutsComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    UserModule,
  ],
  exports: [MainLayoutsComponent]
})
export class MainModule {}
