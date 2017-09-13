import { Component, OnInit } from '@angular/core';
import {RandomUserService} from "../../services/random-user.service";
import {IUser} from "../../intarfaces/iuser";
import {ListUsersComponent} from '../list-users/list-users.component';


@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss'],
  providers:[
    RandomUserService
  ]
})
export class RandomUserComponent implements OnInit {

  title = 'Генерация случайного пользователя';
  private FILTER_YEAR: number = 1975;
  users: Array<IUser> = [];
  userCurrent: IUser;

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit() {
  }

  public getUser(): Promise<Array<IUser>>
  {

    return new Promise((resolve) => {

      const filterYear = (user: IUser) => {
        this.users.push(user);

        if(this.FILTER_YEAR > new Date(Date.parse(user.dob)).getFullYear())
        {
          this.userCurrent = user;
          resolve(this.users);
        }else{
          this.randomUserService.sendRequest(user.email).then(filterYear);
        }
      };
      this.randomUserService.sendRequest().then(filterYear);
    });
  }


}
