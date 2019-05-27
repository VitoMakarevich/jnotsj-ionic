import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Localization} from './static/strings';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ApiService, UrlPrefixInjectionToken} from './service/api.service';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicStorageModule} from '@ionic/storage';
import {StorageModule} from './storage/storage.module';
import {ToastComponent} from './common/toast/toast.component';
import {HeaderComponent} from './common/header/header.component';
import {UiApiService} from './service/ui-api.service';
import {SpinnerComponent} from './common/spinner/spinner.component';
import {AuthInterceptorProvider} from './authInterceptor';
import {SpinnerInterceptorProvider} from './spinnerInterceptor';
import {commonModuleReducer} from './store/reducers';

@NgModule({
  declarations: [AppComponent, ToastComponent, HeaderComponent, SpinnerComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      StoreModule.forRoot(commonModuleReducer),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      EffectsModule.forRoot([]),
      HttpClientModule,
      ReactiveFormsModule,
      IonicStorageModule.forRoot({
          name: '__notsappdb',
          driverOrder: ['indexeddb', 'sqlite', 'websql']
      }),
      StorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      {provide: UrlPrefixInjectionToken, useValue: environment.apiPrefix},
    Localization,
      ApiService,
      UiApiService,
      AuthInterceptorProvider,
      SpinnerInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
