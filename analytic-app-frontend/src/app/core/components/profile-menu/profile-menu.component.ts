import { Component } from '@angular/core';

import { environment } from 'environments/environment';


@Component({
  selector: 'core-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  ssoProvider: string = environment.ssoProvider;
}
