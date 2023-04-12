import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelperModule } from "@helper";
import { HelperMockApiModule } from "@helper/lib/mock-api";
import { mockApiServices } from "app/mock-api";
import { LayoutModule } from "app/layout/layout.module";
import { appConfig } from "app/core/config/app.config";
import { HelperConfigModule } from "@helper/services/config";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    HelperModule,
    HelperConfigModule.forRoot(appConfig),
    HelperMockApiModule.forRoot(mockApiServices),

    LayoutModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
