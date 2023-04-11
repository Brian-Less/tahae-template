import { ModuleWithProviders, NgModule } from '@angular/core';
import { HelperConfigService } from '@helper/services/config/config.service';
import { HELPER_APP_CONFIG } from '@helper/services/config/config.constants';

@NgModule()
export class HelperConfigModule
{
    /**
     * Constructor
     */
    constructor(private _helperConfigService: HelperConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<HelperConfigModule>
    {
        return {
            ngModule : HelperConfigModule,
            providers: [
                {
                    provide : HELPER_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
