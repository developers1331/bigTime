import { Component, OnInit } from '@angular/core';
import { usersStatistics } from '../../user.mocks';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  usersStatistics: any = usersStatistics;

  constructor() { }

  ngOnInit(): void {
    this.getArrayStatistics(0)
  }

  public getArrayStatistics(id: number) {
    this.usersStatistics =  Object.entries(usersStatistics[id].statistics);
    console.log(this.usersStatistics);
  }

}
