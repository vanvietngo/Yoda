import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servieces/auth.service';
@Component({
  selector: 'yoda-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userActive: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userActive = this.authService.getActiveAccount();
    console.log(this.userActive)
  }
}
