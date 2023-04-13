import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { ProfileComponent } from './profile/profile.component';

import { environment } from '../environments/environment';


declare const process: any; // Add this line to declare process


const oktaDomain = process.env.OKTA_DOMAIN;
const oktaClientId = process.env.OKTA_CLIENT_ID;

const oktaAuth = new OktaAuth({
  issuer: 'https://' + oktaDomain + '/oauth2/default',
  clientId: oktaClientId,
  redirectUri: window.location.origin + '/callback',
});

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule,
    HttpClientModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }