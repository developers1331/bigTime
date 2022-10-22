import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftMenuComponent} from './components/left-menu/left-menu.component';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {ExitBtnComponent} from './components/exit-btn/exit-btn.component';
import {NavigationMenuItemComponent} from './components/navigation-menu-item/navigation-menu-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LeftMenuComponent,
    NavigationMenuComponent,
    ExitBtnComponent,
    NavigationMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LeftMenuComponent]
})
export class MenuModule {}
