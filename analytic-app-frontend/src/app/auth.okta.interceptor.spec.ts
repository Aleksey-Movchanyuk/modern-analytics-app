import { TestBed } from '@angular/core/testing';

import { AuthOktaInterceptor } from './auth.okta.interceptor';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthOktaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthOktaInterceptor = TestBed.inject(AuthOktaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
