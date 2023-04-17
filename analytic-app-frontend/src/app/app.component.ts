import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'Analytic App Frontend';
  ssoProvider: string = environment.ssoProvider;

  constructor() { }

  public ngOnInit(): void {
    // Base code
  }

  ngOnDestroy(): void {
    // Base code
  }
}


