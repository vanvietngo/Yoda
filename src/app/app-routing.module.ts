import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { auth } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [MsalGuard, auth],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
