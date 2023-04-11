import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { HelperMockApiService } from '@helper/lib/mock-api';
import { users as userData } from 'app/mock-api/user/data';
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserMockApi
{
    private _user: any = userData;

    /**
     * Constructor
     */
    constructor(private _helperMockApiService: HelperMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        this._helperMockApiService
            .onGet(environment.api + '/users', 2000)
            .reply(() => [200, cloneDeep(this._user)]);
    }
}
