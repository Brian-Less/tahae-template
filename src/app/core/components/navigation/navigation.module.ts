import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CoreVerticalNavigationComponent } from "app/core/components/navigation/vertical/vertical.component";

@NgModule({
  declarations: [
    CoreVerticalNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [
    CoreVerticalNavigationComponent
  ]
})
export class CoreNavigationModule { }
