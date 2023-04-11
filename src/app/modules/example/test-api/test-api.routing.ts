import { Route } from '@angular/router';
import { TestApiComponent } from "app/modules/example/test-api/test-api.component";

export const exampleRoutes: Route[] = [
    {
        path     : '',
        component: TestApiComponent
    }
];
