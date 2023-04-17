import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '.././app-material.module';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { ProfileMenuMicrosoftComponent } from './components/profile-menu/profile-menu-microsoft/profile-menu-microsoft.component';
import { ProfileMenuOktaComponent } from './components/profile-menu/profile-menu-okta/profile-menu-okta.component';
import { ProfileMenuNativeComponent } from './components/profile-menu/profile-menu-native/profile-menu-native.component';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileMenuComponent,
    ProfileMenuMicrosoftComponent,
    ProfileMenuOktaComponent,
    ProfileMenuNativeComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }