import { NgModule } from '@angular/core';
import { ClassicLayoutComponent } from './classic.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

import { CoreNavigationModule } from "app/core/components/navigation/navigation.module";

@NgModule({
  declarations: [
    ClassicLayoutComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    CoreNavigationModule,
    SharedModule
  ],
  exports: [
    ClassicLayoutComponent
  ]
})
export class ClassicLayoutModule {
}
