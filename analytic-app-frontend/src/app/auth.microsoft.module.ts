import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http"; 

import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor } from '@azure/msal-angular'; // Updated import
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';


declare const process: any; // Add this line to declare process

// Microsoft Auth details
const microsoftAuthority = process.env.MICROSOFT_AUTHORITY; // 'Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here' The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
const microsoftClientId = process.env.MICROSOFT_CLIENT_ID; // Application (client) ID from the app registration

const microsoftAuth = {
    clientId: microsoftClientId,
    authority: microsoftAuthority, 
    redirectUri: ''// This is your redirect URI
  };

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
    imports: [
        MsalModule.forRoot( new PublicClientApplication({
          auth: microsoftAuth,
          cache: {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: isIE,
          }
        }), {
            interactionType: InteractionType.Redirect, // MSAL Guard Configuration
            authRequest: {
              scopes: ['user.read']
            }
        }, null)
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
        MsalGuard
    ],
    bootstrap: [MsalRedirectComponent] 
})
export class AuthModule { }