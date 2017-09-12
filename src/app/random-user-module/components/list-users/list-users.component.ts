import { Component, OnInit,Input } from '@angular/core';
import {IUser} from "../../intarfaces/iuser";
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @Input()
  public users: Array<IUser> = [];

  constructor() { }

  ngOnInit() {
  }

}
