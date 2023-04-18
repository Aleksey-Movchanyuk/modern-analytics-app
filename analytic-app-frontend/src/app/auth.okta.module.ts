import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import { AuthOktaInterceptor } from './auth.okta.interceptor';


declare const process: any; // Add this line to declare process

// OKTA Auth details
const oktaDomain = process.env.OKTA_DOMAIN;
const oktaClientId = process.env.OKTA_CLIENT_ID;

const oktaAuth = new OktaAuth({
  issuer: 'https://' + oktaDomain + '/oauth2/default',
  clientId: oktaClientId,
  redirectUri: 'callback',
});


@NgModule({
    imports: [
        OktaAuthModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthOktaInterceptor, multi: true },
        { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    ],
})
export class AuthOktaModule { }