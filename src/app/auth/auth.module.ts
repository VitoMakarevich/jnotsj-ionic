import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from './sign-in/component/sign-in.component';
import {AuthRoutingModule} from './auth.router.module';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {SignInPage} from './sign-in/container/sign-in.container';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthGuard} from './auth-guard.service';
import {AuthEffects} from './store/effects/signIn';
import {signInModuleReducer} from './store/reducers';

@NgModule({
  declarations: [SignInComponent, SignInPage],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
      StoreModule.forFeature('authModule', signInModuleReducer),
      EffectsModule.forFeature([AuthEffects])
  ],
    providers: [AuthGuard]
})
export class AuthModule { }
