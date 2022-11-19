import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from 'src/modules/core/core.module';
import {MainModule} from 'src/modules/main/main.module';
import {MenuModule} from 'src/modules/menu/menu.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MenuModule,
    MainModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
