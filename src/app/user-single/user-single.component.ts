import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Users } from '../models/Users';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: Users;
  @Input() index!: number;
  @Output() removeUser = new EventEmitter<Users>()

  deleteUser(user:Users) {
    this.removeUser.emit(user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
