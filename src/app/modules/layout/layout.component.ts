import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/services/theme.service';
@Component({
  selector: 'yoda-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private _themeService: ThemeService) {}

  ngOnInit(): void {
    this._themeService.setDarkTheme();
  }
}
