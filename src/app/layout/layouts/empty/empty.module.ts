import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutComponent } from 'app/layout/layouts/empty/empty.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        EmptyLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        SharedModule
    ],
    exports     : [
        EmptyLayoutComponent
    ]
})
export class EmptyLayoutModule
{
}
