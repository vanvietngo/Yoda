import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginDisplay = false;

  constructor(
    private router: Router,
    private authService: MsalService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration
  ) {}

  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService
          .loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      } else {
        this.authService
          .loginPopup()
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({
          ...this.msalGuardConfig.authRequest,
        } as RedirectRequest);
      } else {
        this.authService.loginRedirect();
      }
    }
  }

  logout() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        postLogoutRedirectUri: '/',
        mainWindowRedirectUri: '/',
      });
    } else {
      this.authService.logoutRedirect({
        postLogoutRedirectUri: '/',
      });
    }
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    if (this.loginDisplay) {
      this.router.navigate(['/my-projects']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getActiveAccount() {
    console.log(
      "this.authService.instance.getActiveAccount()", this.authService.instance.getActiveAccount()
    )
    return this.authService.instance.getActiveAccount();
  }
}
