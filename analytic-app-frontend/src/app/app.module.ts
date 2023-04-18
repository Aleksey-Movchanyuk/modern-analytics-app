import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthOktaModule } from './auth.okta.module';
import { AuthMicrosoftModule } from './auth.microsoft.module';
import { AuthNativeModule } from './auth.native.module';

import { environment } from 'environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    environment.ssoProvider == "Native" ? AuthNativeModule : (environment.ssoProvider == "OKTA" ? AuthOktaModule : AuthMicrosoftModule),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }