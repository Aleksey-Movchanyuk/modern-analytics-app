import { Component, OnInit, Inject } from '@angular/core';
import { filter, map, takeUntil, Observable, Subject } from 'rxjs';



@Component({
  selector: 'core-profile-menu-microsoft',
  templateUrl: './profile-menu-microsoft.component.html',
  styleUrls: ['./profile-menu-microsoft.component.scss']
})
export class ProfileMenuMicrosoftComponent implements OnInit {
  public name$!: Observable<string>;
  public email$!: Observable<string>;


  constructor(
  ) {}


  public ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public async signIn() : Promise<void> {
  }

  public async signOut(): Promise<void> {
  }
}
