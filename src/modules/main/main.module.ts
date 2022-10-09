import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutsComponent} from './components/main-layouts/main-layouts.component';



@NgModule({
  declarations: [
    MainLayoutsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainLayoutsComponent]
})
export class MainModule {}
