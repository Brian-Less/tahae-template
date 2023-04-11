import { NgModule } from '@angular/core';
import { TestApiComponent } from './test-api.component';
import { SharedModule } from "app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { exampleRoutes } from "app/modules/example/test-api/test-api.routing";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    TestApiComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    MatButtonModule,
    MatTableModule,
    SharedModule,
  ]
})
export class TestApiModule { }
