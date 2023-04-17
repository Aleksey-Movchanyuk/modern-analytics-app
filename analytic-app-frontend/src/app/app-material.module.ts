import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
  ],
})

export class AppMaterialModule { }