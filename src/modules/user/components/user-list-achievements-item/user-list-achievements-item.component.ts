import { Component, OnInit } from '@angular/core';
import { usersStatistics } from '../../user.mocks';

@Component({
  selector: 'app-user-list-achievements-item',
  templateUrl: './user-list-achievements-item.component.html',
  styleUrls: ['./user-list-achievements-item.component.scss']
})
export class UserListAchievementsItemComponent implements OnInit {

  usersStatistics: any = usersStatistics;

  constructor() { }

  ngOnInit(): void {
    this.getArrayStatistics(0);
  }

  public getArrayStatistics(id: number) {
    this.usersStatistics = usersStatistics[id].achievements;
    console.log(this.usersStatistics)
  }

}
