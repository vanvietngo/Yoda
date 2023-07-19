import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/user.model';
@Component({
  selector: 'yoda-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private user: User,
    ) {}

  ngOnInit(): void {
    console.log("this.user.username",this.user.username);
  }
}
