import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataImage } from '../menu.data';

@Component({
  selector: 'app-navigation-menu-item',
  templateUrl: './navigation-menu-item.component.html',
  styleUrls: ['./navigation-menu-item.component.scss']
})
export class NavigationMenuItemComponent implements OnInit {

  @Input() link: string = '';
  @Input() img: string = '';

  dataImage: Object = dataImage;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigate(): void {
    this.router.navigate([`/${this.link}`])    
  }

  // public getUrlImage(link: string): string {
  //   return link = this.dataImage
  // }

}
