import { Component, OnInit, Inject } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { AuthState, OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'core-profile-menu-okta',
  templateUrl: './profile-menu-okta.component.html',
  styleUrls: ['./profile-menu-okta.component.scss']
})
export class ProfileMenuOktaComponent implements OnInit {

  public name$!: Observable<string>;
  public email$!: Observable<string>;

  constructor(
    private _oktaAuthStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth
  ) { }

  public ngOnInit(): void {

    this.name$ = this._oktaAuthStateService.authState$.pipe(
      filter((authState: AuthState) => !!authState && !!authState.isAuthenticated),
      map((authState: AuthState) => authState.idToken?.claims.name ?? '')
    );

    this.email$ = this._oktaAuthStateService.authState$.pipe(
      filter((authState: AuthState) => !!authState && !!authState.isAuthenticated),
      map((authState: AuthState) => authState.idToken?.claims.email ?? '')
    );

    this._oktaAuthStateService.authState$.subscribe(
      res => { console.log(res); }
    )

  }

  public async signOut(): Promise<void> {
    await this._oktaAuth.signOut();
  }

}
