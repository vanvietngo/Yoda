import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private _username: string;
  private _name: string;
  private _oid: string;
  private _email: string;
  private _roles: string[];

  constructor() {
    this._username = '';
    this._name = '';
    this._oid = '';
    this._email = '';
    this._roles = [];
  }

  init(activeAccount: any): void {
    this._username = activeAccount.idTokenClaims?.preferred_username;
    this._name = activeAccount.idTokenClaims?.name;
    this._email = activeAccount.idTokenClaims?.email;
    this._oid = activeAccount.idTokenClaims?.oid;
  }

  currentUser(): string | undefined {
    return this._username;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

}
