import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LayoutComponent } from "app/layout/layout.component";

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

const appRoutes: Routes = [
  
  {path: '', pathMatch : 'full', redirectTo: 'example'},

  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      {
        path: 'example', loadChildren: () => import('app/modules/example/test-api/test-api.module').then(m => m.TestApiModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
