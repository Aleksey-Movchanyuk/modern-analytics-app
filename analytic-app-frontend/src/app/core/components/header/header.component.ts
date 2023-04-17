import { Component } from '@angular/core';

import { environment } from 'environments/environment';


@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ssoProvider: string = environment.ssoProvider;
}
