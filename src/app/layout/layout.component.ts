import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HelperConfigService } from "@helper/services/config";
import { AppConfig } from "app/core/config/app.config";
import { Layout } from "app/layout/layout.types";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnDestroy {

    config!: AppConfig;
    layout!: Layout;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _helperConfigService: HelperConfigService
        ) {
        this._helperConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: AppConfig) => {
                this.config = config;
                this._updateLayout();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    private _updateLayout(): void {

        let route = this._activatedRoute;
        while (route.firstChild) {
            route = route.firstChild;
        }

        this.layout = this.config.layout;

        const layoutFromQueryParam = (route.snapshot.queryParamMap.get('layout') as Layout);
        if (layoutFromQueryParam) {
            this.layout = layoutFromQueryParam;
            if (this.config) {
                this.config.layout = layoutFromQueryParam;
            }
        }

        const paths = route.pathFromRoot;
        paths.forEach((path) => {
            if (path.routeConfig && path.routeConfig.data && path.routeConfig.data['layout']) {
                this.layout = path.routeConfig.data['layout'];
            }
        });
    }

}
