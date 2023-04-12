import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicLayoutComponent } from './classic.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    ClassicLayoutComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ClassicLayoutComponent
  ]
})
export class ClassicLayoutModule {
}
