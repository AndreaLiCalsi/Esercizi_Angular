import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from '../models/Users';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: IUser;
  @Input() index!: number;
  @Output() removeUser = new EventEmitter<IUser>()

  deleteUser(user:IUser) {
    this.removeUser.emit(user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
