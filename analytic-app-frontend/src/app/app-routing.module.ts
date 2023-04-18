import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserUtils } from '@azure/msal-browser';

import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { MsalGuard } from '@azure/msal-angular'; 

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
  case "Microsoft":
    routes = [
      { path: '',  redirectTo: 'core',  pathMatch: 'full' },
      { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule), canActivate: [MsalGuard] },
    ];
    break;
  default:
    routes = [
    ];
    break;
}

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }