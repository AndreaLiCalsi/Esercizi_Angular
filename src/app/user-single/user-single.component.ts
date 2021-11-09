import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../models/Users';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: Users;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
