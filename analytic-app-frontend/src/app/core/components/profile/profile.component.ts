import { Component, OnInit } from '@angular/core';

import { environment } from 'environments/environment';


@Component({
  selector: 'core-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ssoProvider: string = environment.ssoProvider;

  public ngOnInit(): void {
  }

}