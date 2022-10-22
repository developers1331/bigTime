import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-statistics-item',
  templateUrl: './profile-statistics-item.component.html',
  styleUrls: ['./profile-statistics-item.component.scss']
})
export class ProfileStatisticsItemComponent implements OnInit {

  @Input() text: string = '';
  @Input() value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  

}
