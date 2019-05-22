import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageService} from './storage.service';
import {HttpInterceptorsProvider} from '../authInterceptor';

@NgModule()
export class StorageModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StorageModule,
            providers: [StorageService,
                HttpInterceptorsProvider]
        }
    }
}

