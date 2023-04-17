import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';

import { environment } from 'environments/environment';


let routes: Routes;

switch (environment.ssoProvider) {
  case "OKTA":
    routes = [
      { path: '',  redirectTo: 'core',  pathMatch: 'full' },
      { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule), canActivate: [OktaAuthGuard] },
      { path: 'callback', component: OktaCallbackComponent }
    ];
    break;
  case "MS":
    routes = [
    ];
    break;
  default:
    routes = [
    ];
    break;
}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }