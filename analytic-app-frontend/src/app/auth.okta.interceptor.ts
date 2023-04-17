import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';



@Injectable()
export class AuthOktaInterceptor implements HttpInterceptor {

  constructor(
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth,
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthHeaderToAllowedOrigins(request));
  }

  private addAuthHeaderToAllowedOrigins(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const authToken = this._oktaAuth.getAccessToken();
    const req = request.clone({ setHeaders: { 'Authorization': `Bearer ${authToken}` } });

    return req;
  }
}