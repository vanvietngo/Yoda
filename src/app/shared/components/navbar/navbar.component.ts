import { Component, OnInit } from '@angular/core';
import { AppMenu } from '@shared/models/app-menu.model';
import { appMenus } from '@shared/constants/appMenus';
import { Router } from '@angular/router';

@Component({
  selector: 'yoda-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appMenus: AppMenu[] = appMenus;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onClick(item: AppMenu) {
    item?.path && this._router.navigate([item?.path]);
  }

  selectedMenu(item: AppMenu) {
    return item.path && this._router.url.includes(item.path);
  }
}
