import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@theme/services/theme.service';
import { User } from '@core/models/user.model';
import { AuthService } from '@core/servieces/auth.service';
@Component({
  selector: 'yoda-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private _themeService: ThemeService,
    private user: User,
    private authServiceCore: AuthService,
  ) {}

  ngOnInit(): void {
    this._themeService.setDarkTheme();
    // this.user.init(this.authServiceCore.getActiveAccount());
  }
}
