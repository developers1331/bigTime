import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public isAuth: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleAuth(): void {
    this.isAuth = !this.isAuth;
  }

}
